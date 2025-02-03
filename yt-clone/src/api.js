import axios from 'axios'

console.log(import.meta.env.VITE_GOOGLE_API_KEY)

const request = axios.create({
    baseURL:"https://youtube.googleapis.com/youtube/v3/",
    params:{
        key: import.meta.env.VITE_GOOGLE_API_KEY,
    }
})

export default request;