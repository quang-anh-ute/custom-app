// api.ts
import axios from "axios";

const API_BASE_URL = "http://localhost:8088/api/v1/user"; // Replace with your backend API base URL

interface RegisterData {
  username: string;
  email: string;
  password: string;
  full_name: string;
}

export const registerUser = async (data: RegisterData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/create`, data);
    return response.data;
  } catch (error) {
    console.error("Error registering user:", error);
    throw error;
  }
};
