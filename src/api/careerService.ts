import apiClient from './apiClient';

export const careerService = {
  getJobs: async (code: string) => {
    return apiClient.get('/api/Job', {
      params: { code }, 
      requiresApiKey: true
    });
  },

  getJob: async (id: string, code: string) => {
    return apiClient.get(`/api/Job/${id}`, { 
      params: { code }, 
      requiresApiKey: true });
  },

  filterJobApplications: async (filters: any) => {
    return apiClient.get('/api/Job/filter', {
      params: filters,
      requiresApiKey: true
    });
  },
};