import axios from 'axios';

export const BASE_URL = 'https://api.jsonapi.co/rest/v1/user/list';

const api = axios.create({
  baseURL: BASE_URL,
});

export default api;
