import axios from 'axios';

// Create a standalone instance
const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

declare module 'axios' {
  export interface AxiosRequestConfig {
    requiresApiKey?: boolean;
  }
}

// Request Interceptor: Inject API Key automatically
apiClient.interceptors.request.use((config) => {
  const keyName = import.meta.env.VITE_API_KEY_NAME;
  const keyValue = import.meta.env.VITE_API_KEY_VALUE;
  
  if (config.requiresApiKey && keyName) {
    config.headers[keyName] = keyValue;
  }

  return config;
});

// Response Interceptor: Centralized Error Handling
apiClient.interceptors.response.use(
  (response) => response.data, // Return data directly for simplicity
  (error) => {
    // Standardize error messages
    const message = error.response?.data?.message || 'An unexpected error occurred';
    return Promise.reject(new Error(message));
  }
);

export default apiClient;