import apiClient from './apiClient';

export const careerService = {
  getJobs: async () => {
    return apiClient.get('/api/Job', { requiresApiKey: true });
  },

  getJob: async (id: string) => {
    return apiClient.get(`/api/Job/${id}`, { requiresApiKey: true });
  },

  filterJobApplications: async (filters: any) => {
    return apiClient.get('/api/Job/filter', {
      params: filters,
      requiresApiKey: true
    });
  },
};