import axios, { AxiosResponse } from 'axios';

export const apiClient = axios.create({
  baseURL: 'http://ipv4address:3333',
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json'
  }
});

type User = {
  id: string;
  name: string;
  email: string;
}

type LoginResponse = {
  token: string;
  user: User;
}

type RegisterResponse = {
  message: string;
  user: User;
} 


export default {
  login: async (email: string, password: string): Promise<AxiosResponse<LoginResponse>> => {
    try {
      const response: AxiosResponse<LoginResponse> = await apiClient.post('/login', { email, password });
      return response;
    } catch (err) {
      console.log('erro na função login dentro do service api', err);
      throw new Error(err);
    }
  },
  register: async (name: string, email: string, password: string): Promise<AxiosResponse<RegisterResponse>> => {
    try {
      const response: AxiosResponse<RegisterResponse> = await apiClient.post('/signup', { name, email, password });
      return response;
    } catch (err) {
      console.log('erro na função signup dentro do service api', err);
      throw new Error(err);
    }
  }
}