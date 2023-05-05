import axios from "axios";

export async function fetchData(url) {
    try {
        const res = await axios.get(url)
        return res.data
    } catch (arr) {
        console.log(
            arr
        )
    }
}