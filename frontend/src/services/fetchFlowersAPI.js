import axiosURL from './axios';

export const fetchFlowersAPI = async () => {
  const res = await axiosURL.get('/flowers');
  return res.data;
};
