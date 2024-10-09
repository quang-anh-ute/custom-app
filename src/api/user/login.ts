import axios from "axios";
import React from "react";

const API_BASE_URL = "http://localhost:8088/api/v1/user"; // Replace with your backend API base URL

interface LoginData {
  username: string;
  password: string;
}

export const loginUser = async (data: LoginData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, data);
    return response.data;
  } catch (error) {
    console.error("Error login user:", error);
    throw error;
  }
};
