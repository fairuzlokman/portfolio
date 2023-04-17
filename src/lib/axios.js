import axios from 'axios'

const API_BASE_URL = 'https://dark-sky.p.rapidapi.com';

const request = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'X-RapidAPI-Key': 'd0450790damshd1562d68ae4cf60p159a4cjsn48c5d2990f72',
    'X-RapidAPI-Host': 'dark-sky.p.rapidapi.com'
  }
});

export function getData(response) {
  return response.data;
}

export default request;