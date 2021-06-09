import axios from 'axios';

// Grab our environment variables for setup
const API_URL: string = process.env.REACT_APP_API_URL || '/api';

// Grab api key
export const API_KEY: string = process.env.REACT_APP_API_KEY || 'api_key';

// Create the API client
const api = axios.create({
  baseURL: API_URL,
});

export default api;
