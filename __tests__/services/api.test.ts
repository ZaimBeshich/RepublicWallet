import {api} from '../../src/services/api';
import {mockTransactions, mockUser} from '../../src/mock/mockData';
import {wait} from '../../src/utils/helpers';
import {User, UserSettings} from '../../src/types/api';

// Мокаем fetch и wait
global.fetch = jest.fn();
jest.mock('../../src/utils/helpers', () => ({
  wait: jest.fn(),
}));

describe('api', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    (fetch as jest.Mock).mockClear();
    (wait as jest.Mock).mockResolvedValue(undefined);
  });

  describe('getTransactions', () => {
    it('should fetch transactions successfully', async () => {
      const mockResponse = {
        ok: true,
        status: 200,
        json: () => Promise.resolve(mockTransactions),
      };
      (fetch as jest.Mock).mockResolvedValueOnce(mockResponse);

      const result = await api.getTransactions();

      expect(fetch).toHaveBeenCalledWith('http://localhost:3000/transactions');
      expect(result).toEqual({
        data: mockTransactions,
        status: 200,
      });
    });

    it('should throw error when fetch fails', async () => {
      (fetch as jest.Mock).mockRejectedValueOnce(new Error('Network error'));

      await expect(api.getTransactions()).rejects.toThrow(
        'Failed to fetch transactions',
      );
    });

    it('should throw error when response is not ok', async () => {
      const mockResponse = {
        ok: false,
        status: 404,
        json: () => Promise.resolve({message: 'Not found'}),
      };
      (fetch as jest.Mock).mockResolvedValueOnce(mockResponse);

      await expect(api.getTransactions()).rejects.toThrow('Not found');
    });
  });

  describe('getUser', () => {
    const mockUserWithSettings: User = {
      ...mockUser,
      id: 'USER-1',
      settings: {
        displayCurrency: 'USD',
        monthlyLimit: 1000,
        availableCurrencies: ['USD', 'EUR', 'GBP', 'RUB'],
      },
    };

    it('should fetch user successfully', async () => {
      const mockResponse = {
        ok: true,
        status: 200,
        json: () => Promise.resolve(mockUserWithSettings),
      };
      (fetch as jest.Mock).mockResolvedValueOnce(mockResponse);

      const result = await api.getUser();

      expect(fetch).toHaveBeenCalledWith('http://localhost:3000/users/USER-1');
      expect(result).toEqual({
        data: mockUserWithSettings,
        status: 200,
      });
    });

    it('should throw error when fetch fails', async () => {
      (fetch as jest.Mock).mockRejectedValueOnce(new Error('Network error'));

      await expect(api.getUser()).rejects.toThrow('Failed to get user');
    });
  });

  describe('updateUser', () => {
    const updatedUser: User = {
      ...mockUser,
      id: 'USER-1',
      settings: {
        displayCurrency: 'USD',
        monthlyLimit: 1000,
        availableCurrencies: ['USD', 'EUR', 'GBP', 'RUB'],
      },
      name: 'Updated Name',
    };

    it('should update user successfully', async () => {
      const mockResponse = {
        ok: true,
        status: 200,
        json: () => Promise.resolve(updatedUser),
      };
      (fetch as jest.Mock).mockResolvedValueOnce(mockResponse);

      const result = await api.updateUser(updatedUser);

      expect(fetch).toHaveBeenCalledWith('http://localhost:3000/users/USER-1', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedUser),
      });
      expect(result).toEqual({
        data: updatedUser,
        status: 200,
      });
    });

    it('should throw error when update fails', async () => {
      (fetch as jest.Mock).mockRejectedValueOnce(new Error('Network error'));

      await expect(api.updateUser(updatedUser)).rejects.toThrow(
        'Failed to update user',
      );
    });
  });

  describe('updateUserSettings', () => {
    const settings: UserSettings = {
      displayCurrency: 'EUR',
      monthlyLimit: 2000,
      availableCurrencies: ['USD', 'EUR', 'GBP', 'RUB'],
    };

    it('should update user settings successfully', async () => {
      const mockResponse = {
        ok: true,
        status: 200,
        json: () => Promise.resolve({...mockUser, settings}),
      };
      (fetch as jest.Mock).mockResolvedValueOnce(mockResponse);

      const result = await api.updateUserSettings(settings);

      expect(fetch).toHaveBeenCalledWith('http://localhost:3000/users/USER-1', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          settings: {
            ...settings,
            availableCurrencies: ['USD', 'EUR', 'GBP', 'RUB'],
          },
        }),
      });
      expect(result).toEqual({
        data: {...mockUser, settings},
        status: 200,
      });
    });

    it('should throw error when update fails', async () => {
      (fetch as jest.Mock).mockRejectedValueOnce(new Error('Network error'));

      await expect(api.updateUserSettings(settings)).rejects.toThrow(
        'Failed to update user settings',
      );
    });
  });
});
