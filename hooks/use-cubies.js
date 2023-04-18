import axios from "axios";
import { useEffect, useState } from "react";

function useGetCubies() {
    const [cubieData, setCubieData] = useState([])
    useEffect(() => {
        setCubieData([])
        axios
            .get('http://localhost:3000/cubies')
            .then((response) => {
                setCubieData(response.data.records)
            })
    }, [setCubieData])

    return cubieData
}

export { useGetCubies }