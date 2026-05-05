import apiClient from './apiClient';

export interface ContactBackendRequest {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  company: string;
  subject: string;
  messageBody: string;
}

export const contactService = {
  sendContactForm: async (data: ContactBackendRequest) => {
    return apiClient.post('/api/ContactUs/agro-contact-us', data, { requiresApiKey: true });
  },
  
};