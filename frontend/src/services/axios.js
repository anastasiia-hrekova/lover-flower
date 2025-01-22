import axios from 'axios';

const axiosURL = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL || 'http://localhost:4000',
});

export default axiosURL;
