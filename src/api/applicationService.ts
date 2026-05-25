import apiClient from './apiClient';

export const applicationService = {
    submitApplication: async (jobId: number, formData: FormData) => {
        return apiClient.post('/api/JobApplication/agro', formData, {
            requiresApiKey: true,
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
    },

    getApplication: async (id: string) => {
        return apiClient.get(`/api/JobApplication/${id}`, { requiresApiKey: true });
    },

    updateApplication: async (id: string, data: any) => {
        return apiClient.put(`/api/JobApplication/${id}`, data, { requiresApiKey: true });
    },

    getApplicationsByJobId: async (jobId: string) => {
        return apiClient.get(`/api/JobApplication/ByJobId/${jobId}`, { requiresApiKey: true });
    },

    filterApplications: async (filters: any) => {
        return apiClient.get('/api/JobApplication/filter', {
            params: filters,
            requiresApiKey: true
        });
    },
};