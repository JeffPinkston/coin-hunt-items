import axios from "axios";
import { useEffect, useState, useCallback } from "react";

function useGetCubies() {
    const [cubieData, setCubieData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('http://localhost:3000/cubies')
            setCubieData(response.data)
        }

        fetchData()
            .catch(console.error)
    }, [])

    return cubieData
}



export { useGetCubies }