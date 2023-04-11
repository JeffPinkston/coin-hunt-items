import axios from "axios";
import { useQuery } from "react-query";

export async function getCubies() {
    const data = await axios
        .get('https://stats.coinhuntworldwiki.com/records/cubies');
    console.log(data)
    return data;
}

export function useCubies() {
    return useQuery(["cubies"], () => getCubies());
}

// export function useCubies() {
//     const data = useQuery(["cubies"], () => axios
//         .get('https://stats.coinhuntworldwiki.com/records/cubies'));
//     console.log(data)
//     return data;
// }

