import axios from "axios";

const BASE_URL = 'http://localhost:8083'

export default axios.create({
    baseURL: BASE_URL
}) 

export const axiosClient = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content'}
})