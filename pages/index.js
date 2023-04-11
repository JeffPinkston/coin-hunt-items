import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useEffect, useMemo, useState } from 'react'
import axios from 'axios'
import { useTable } from 'react-table'
import { cubieColumns } from '@/defs/column-definitions'
import CubieTable from '@/components/cubie-table'
import { useQuery } from 'react-query'
import { getCubies, useCubies } from '@/hooks/use-cubies'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  let [cubieData, setCubieData] = useState([]);
  const columns = useMemo(() => cubieColumns, [])
  const tableInstance = useTable({
    columns,
    data: cubieData,
    initialState: {
      hiddenColumns: ['ID', 'SingleUse', 'Randomizer', 'WillReturn', 'RecipeItem1', 'RecipeQty1', 'RecipeItem2', 'RecipeQty2', 'RecipeItem3', 'RecipeQty3', 'RecipeItem4', 'RecipeQty4', 'HasBP', 'MaximumCubie', 'ReleaseDate', 'FTPPlayer', 'FTPDate', 'Category', 'EventName', 'ReleaseYear', 'ExistingBP', 'MaximumBP', 'FlavorText'],
    }
  })

  useEffect(() => {
    axios
      .get('https://stats.coinhuntworldwiki.com/records/cubies')
      .then((response) => {
        setCubieData(response.data.records)
        console.log(response)
      })
  }, [])



  if (cubieData.length === 0) {
    return <div>Loading...</div>
  }


  return (
    <>
      <CubieTable tableInstance={tableInstance} />
    </>
  )

}
