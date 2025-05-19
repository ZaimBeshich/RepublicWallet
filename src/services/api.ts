import {Transaction, User, UserSettings, ApiResponse} from '../types/api';
import {wait} from '../utils/helpers';

const API_URL = 'http://localhost:3000';
const USER_ID = 'USER-1';

const handleResponse = async (response: Response) => {
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(
      errorData.message || `Network error! status: ${response.status}`,
    );
  }
  const data = await response.json();
  return {data, status: response.status};
};

export const api = {
  getTransactions: async (): Promise<ApiResponse<Transaction[]>> => {
    try {
      await wait(1000);
      const response = await fetch(`${API_URL}/transactions`);
      return handleResponse(response);
    } catch (error) {
      throw new Error(
        error instanceof Error ? error.message : 'Failed to fetch transactions',
      );
    }
  },

  updateTransaction: async (): Promise<ApiResponse<Transaction[]>> => {
    try {
      await wait(1000);
      const response = await fetch(`${API_URL}/transactions`);
      return handleResponse(response);
    } catch (error) {
      throw new Error(
        error instanceof Error
          ? error.message
          : 'Failed to update transactions',
      );
    }
  },
  getUser: async (): Promise<ApiResponse<User>> => {
    try {
      await wait(800);
      const response = await fetch(`${API_URL}/users/${USER_ID}`);
      return handleResponse(response);
    } catch (error) {
      throw new Error(
        error instanceof Error ? error.message : 'Failed to fetch user',
      );
    }
  },

  updateUser: async (user: User): Promise<ApiResponse<User>> => {
    try {
      await wait(1200);
      const response = await fetch(`${API_URL}/users/${USER_ID}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });
      return handleResponse(response);
    } catch (error) {
      throw new Error(
        error instanceof Error ? error.message : 'Failed to update user',
      );
    }
  },

  updateUserSettings: async (
    settings: UserSettings,
  ): Promise<ApiResponse<User>> => {
    try {
      await wait(1000);
      const response = await fetch(`${API_URL}/users/${USER_ID}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          settings: {
            ...settings,
            availableCurrencies: settings.availableCurrencies || [
              'USD',
              'EUR',
              'GBP',
              'RUB',
            ],
          },
        }),
      });
      return handleResponse(response);
    } catch (error) {
      throw new Error(
        error instanceof Error
          ? error.message
          : 'Failed to update user settings',
      );
    }
  },
};
