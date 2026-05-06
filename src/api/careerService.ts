import apiClient from './apiClient';

export const careerService = {
  getJobs: async () => {
    return apiClient.get('/api/Job', { requiresApiKey: true });
  },
  
};