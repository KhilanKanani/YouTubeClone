import axios from "axios";
const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY
const BASE_URL = 'https://youtube138.p.rapidapi.com';

const options = {
    method: 'GET',
    hostname: `${BASE_URL}`,
    headers: {
        'x-rapidapi-key': API_KEY,
        'x-rapidapi-host': 'youtube138.p.rapidapi.com'
    }
};

async function FetchData(url) {
    try {
        const result = await axios.get(`${BASE_URL}/${url} `, options);
        return result.data;
    }

    catch (err) {
        console.log("FetchData Error :", err.message);
    }
}

export default FetchData