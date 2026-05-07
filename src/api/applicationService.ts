import apiClient from './apiClient';

export const applicationService = {
    submitApplication: async (jobId: number, formData: FormData) => {
        return apiClient.post('/api/JobApplication', formData, {
            requiresApiKey: true,
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
    },
};