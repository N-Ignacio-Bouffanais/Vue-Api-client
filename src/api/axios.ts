import axios, { AxiosInstance } from 'axios'

const axiosInstant: AxiosInstance = axios.create({
  baseURL: "http://localhost:3000/api",
  headers:{
    'Content-Type': 'application/json'
  }
});

export default axiosInstant