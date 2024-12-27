import axios from 'axios';

const axiosURL = axios.create({
  baseURL: process.env.BASE_URL || 'http://localhost:4000',
});

export default axiosURL;
