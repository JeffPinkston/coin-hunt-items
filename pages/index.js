import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Suspense, useState, useEffect } from 'react'

import { useGetCubies } from '@/hooks/use-cubies'
import Loading from '@/components/loading'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const data = useGetCubies()
  // const columns = useMemo(() => cubieColumns, [])
  const [textFilter, setTextFilter] = useState('')
  const [cubieData, setCubieData] = useState([]);

  useEffect(() => {
    setCubieData(data)
  }, [data])

  const handleTextChange = (e) => {
    e.target.value === '' ? setCubieData(data) :
    setCubieData(data.filter((cubie) => {
      return cubie.CubieName.includes(e.target.value)
    }
  ))
    setTextFilter(e.target.value);
  }

  return (
    <div className={styles.main}>
      <input type='text' value={textFilter} onChange={handleTextChange}/>
      <Suspense fallback={<Loading />}>
          <div className={styles.container}>
            {cubieData.map((data) => {
                  return <div key={data.ID} className={styles.cubieName}>{data.CubieName}</div>
              })}
          </div>
            
        {/* <CubieTable columns={columns} data={cubieData} /> */}
      </Suspense>
    </div>
  )

}
