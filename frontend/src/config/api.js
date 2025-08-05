// API Configuration
const API_CONFIG = {
  // Development environment
  development: {
    baseURL: 'http://localhost:5000'
  },
  // Production environment
  production: {
    baseURL: 'https://she-can-foundation-dashboard-backend.onrender.com'
  }
};

// Get current environment
const environment = import.meta.env.MODE || 'development';

// Export the appropriate base URL
export const API_BASE_URL = API_CONFIG[environment]?.baseURL || API_CONFIG.development.baseURL;

// Create axios instance with default configuration
import axios from 'axios';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor for logging
apiClient.interceptors.request.use(
  (config) => {
    console.log(`Making ${config.method?.toUpperCase()} request to: ${config.url}`);
    return config;
  },
  (error) => {
    console.error('Request error:', error);
    return Promise.reject(error);
  }
);

// Add response interceptor for error handling
apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error('Response error:', error);
    if (error.response?.status === 404) {
      console.error('API endpoint not found');
    } else if (error.response?.status >= 500) {
      console.error('Server error');
    }
    return Promise.reject(error);
  }
);

export default apiClient; 