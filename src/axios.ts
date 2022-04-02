import Axios, { AxiosInstance } from 'axios';

export const axiosInstance: AxiosInstance = Axios.create({
  baseURL: `${process.env.PROXY_SERVER_URL}${process.env.API_BASE_URL}`,
  headers: {
    'Content-Type': 'application/json',
  },
});
