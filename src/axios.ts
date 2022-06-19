import Axios, { AxiosInstance } from 'axios';

const API_BASE_URL = 'https://www.fotmob.com/';
const PROXY_SERVER_URL = 'https://fotmob-cors.herokuapp.com/';

export const axiosInstance: AxiosInstance = Axios.create({
  baseURL: `${PROXY_SERVER_URL}${API_BASE_URL}`,
  headers: {
    'Content-Type': 'application/json',
    // 'X-Requested-With': 'XMLHttpRequest',
  },
});
