import axios from 'axios';

export const apiClient = axios.create({
  baseURL: 'http://ipv4address:3333',
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json'
  }
});