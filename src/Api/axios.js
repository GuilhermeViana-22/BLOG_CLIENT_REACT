import axios from 'axios';

const getApiBaseUrl = () => {
  const urls = [
    process.env.REACT_APP_API_URL,
    process.env.APP_PRDD_URL,
    'http://127.0.0.1:8000/api'
  ];
  
  for (const url of urls) {
    if (url) {
      return url;
    }
  }
  
  // Fallback URL if none of the above are defined
  return 'http://127.0.0.1:8000/api';
};

const api = axios.create({
  baseURL: getApiBaseUrl(),
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
