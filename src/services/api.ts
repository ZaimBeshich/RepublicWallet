import {Transaction, User, Settings, ApiResponse} from '../types/api';

const API_URL = 'http://localhost:3000';

const handleResponse = async (response: Response) => {
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  return {data, status: response.status};
};

export const api = {
  getTransactions: async (): Promise<ApiResponse<Transaction[]>> => {
    try {
      const response = await fetch(`${API_URL}/transactions`);
      return handleResponse(response);
    } catch (error) {
      console.error('Error fetching transactions:', error);
      throw error;
    }
  },

  getUser: async (): Promise<ApiResponse<User>> => {
    try {
      const response = await fetch(`${API_URL}/user`);
      return handleResponse(response);
    } catch (error) {
      console.error('Error fetching user:', error);
      throw error;
    }
  },

  updateUser: async (userData: Partial<User>): Promise<ApiResponse<User>> => {
    try {
      const response = await fetch(`${API_URL}/user`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      return handleResponse(response);
    } catch (error) {
      console.error('Error updating user:', error);
      throw error;
    }
  },

  getSettings: async (): Promise<ApiResponse<Settings>> => {
    try {
      const response = await fetch(`${API_URL}/settings`);
      return handleResponse(response);
    } catch (error) {
      console.error('Error fetching settings:', error);
      throw error;
    }
  },

  updateSettings: async (
    settingsData: Partial<Settings>,
  ): Promise<ApiResponse<Settings>> => {
    try {
      const response = await fetch(`${API_URL}/settings`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(settingsData),
      });
      return handleResponse(response);
    } catch (error) {
      console.error('Error updating settings:', error);
      throw error;
    }
  },
};
