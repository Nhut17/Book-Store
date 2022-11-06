import axios from "axios";

const BASE

export default axios.create({
    baseURL: 'http://localhost:8083'
}) 

export const axiosClient = axios.create({
    baseURL: 
})