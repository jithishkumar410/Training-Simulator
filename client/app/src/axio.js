import axios from 'axios';

// Set up Axios instance with CSRF token
const instance = axios.create({
  baseURL: 'http://localhost:8000', // Uncomment and replace with your API base URL if needed
  withCredentials: true, // Ensures cookies (including CSRF token) are sent in cross-origin requests
});

export default instance;