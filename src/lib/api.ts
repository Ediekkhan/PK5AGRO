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

const API_BASE_URL = import.meta.env.VITE_API_URL;

export const api = {
  sendContactForm: async (data: ContactBackendRequest) => {
    const response = await fetch(`${API_BASE_URL}/api/ContactUs/contact-us`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    // Parse the response body
    const result = await response.json();

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || "Failed to send message");
    }

    return result;
  },
};