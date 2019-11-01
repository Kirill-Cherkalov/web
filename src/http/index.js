import axios from 'axios';

const http = axios.create({
  baseURL: 'http://localhost:3002/api/v1',
  withCredentials: true,
});

export default http;
