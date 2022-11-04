import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'http://192.168.0.12:3001/v1/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const createAxiosTokenInstance = () => {
  const axiosTokenInstance = axios.create({
    baseURL: 'http://192.168.0.12:3001/v1/',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
      'Content-Type': 'application/json',
    },
  });
  return axiosTokenInstance;
};
