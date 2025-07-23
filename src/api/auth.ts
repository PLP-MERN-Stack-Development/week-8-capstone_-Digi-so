// client/src/api/auth.ts
import axios from 'axios';

// Create Axios instance with base URL and credentials
const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // Ensure this is defined in your .env file
  withCredentials: true,
});

// Types for form inputs
interface RegisterFormData {
  name: string;
  email: string;
  password: string;
}

interface LoginFormData {
  email: string;
  password: string;
}

// API calls
export const registerUser = (formData: RegisterFormData) =>
  API.post('/auth/register', formData);

export const loginUser = (formData: LoginFormData) =>
  API.post('/auth/login', formData);

