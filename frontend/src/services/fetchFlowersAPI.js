import axiosURL from './axios';

export const fetchFlowersAPI = async () => {
  try {
    const res = await axiosURL.get('/flowers');
    return res.data;
  } catch (error) {
    console.error('Error fetching flowers:', error);
    throw new Error('Failed to fetch flowers');
  }
};
