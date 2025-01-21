import axios from 'axios';

const axiosURL = axios.create({
  baseURL: 'http://localhost:4000',
});

// console.log(process.env.REACT_APP_BASE_URL);

export default axiosURL;
