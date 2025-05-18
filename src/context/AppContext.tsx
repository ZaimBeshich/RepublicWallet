import React, {createContext, useContext, useState} from 'react';
import {Transaction, User, UserSettings} from '../types/api';
import {api} from '../services/api';
import {storage} from '../services/storage';

interface AppContextType {
  transactions: Transaction[];
  user: User | null;
  isTransactionsLoading: boolean;
  isUserLoading: boolean;
  error: string | null;
  isRefreshing: boolean;
  networkError: string | null;
  init: () => Promise<void>;
  refreshTransactions: () => Promise<void>;
  updateUser: (userData: User) => Promise<void>;
  updateUserSettings: (settingsData: UserSettings) => Promise<void>;
  setNetworkError: (error: string | null) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{children: React.ReactNode}> = ({
  children,
}) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [user, setUser] = useState<User | null>(null);
  const [isTransactionsLoading, setIsTransactionsLoading] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isUserLoading, setIsUserLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [networkError, setNetworkError] = useState<string | null>(null);

  const loadCachedData = async () => {
    try {
      const [cachedUser, cachedTransactions] = await Promise.all([
        storage.getUser(),
        storage.getTransactions(),
      ]);

      if (cachedUser) {
        setUser(cachedUser);
      }
      if (cachedTransactions.length) {
        setTransactions(cachedTransactions);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsUserLoading(false);
      setIsTransactionsLoading(false);
    }
  };

  const init = async () => {
    setIsTransactionsLoading(true);
    setIsUserLoading(true);
    setError(null);
    setNetworkError(null);

    try {
      await loadCachedData();
      const [transactionsRes, userRes] = await Promise.all([
        api.getTransactions(),
        api.getUser(),
      ]);

      setTransactions(transactionsRes.data);
      setUser(userRes.data);

      await Promise.all([
        storage.saveTransactions(transactionsRes.data),
        storage.saveUser(userRes.data),
      ]);
    } catch (err) {
      if (user || transactions.length > 0) {
        setError(
          err instanceof Error ? err.message : 'Failed to fetch fresh data',
        );
      } else {
        setError(err instanceof Error ? err.message : 'Failed to fetch data');
      }
    } finally {
      setIsTransactionsLoading(false);
      setIsUserLoading(false);
    }
  };

  const refreshTransactions = async () => {
    setIsRefreshing(true);
    setError(null);
    setNetworkError(null);
    const currentTransactions = transactions;

    try {
      const {data} = await api.getTransactions();
      setTransactions(data);
      await storage.saveTransactions(data);
    } catch (err) {
      setTransactions(currentTransactions);
      const errorMessage =
        err instanceof Error ? err.message : 'Failed to refresh transactions';
      setNetworkError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setIsRefreshing(false);
    }
  };

  const updateUser = async (userData: User) => {
    setIsUserLoading(true);
    setNetworkError(null);

    const currentUser = user;

    try {
      const {data} = await api.updateUser(userData);
      setUser(data);
      await storage.saveUser(data);
    } catch (err) {
      setUser(currentUser);
      const errorMessage =
        err instanceof Error ? err.message : 'Failed to update user';
      setNetworkError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setIsUserLoading(false);
    }
  };

  const updateUserSettings = async (settingsData: UserSettings) => {
    setIsUserLoading(true);
    setNetworkError(null);

    const currentUser = user;

    try {
      const {data} = await api.updateUserSettings(settingsData);
      setUser(data);
      await storage.saveUser(data);
    } catch (err) {
      setUser(currentUser);
      const errorMessage =
        err instanceof Error ? err.message : 'Failed to update user settings';
      setNetworkError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setIsUserLoading(false);
    }
  };

  const value = {
    transactions,
    user,
    isRefreshing,
    isTransactionsLoading,
    isUserLoading,
    networkError,
    error,
    init,
    refreshTransactions,
    setNetworkError,
    updateUser,
    updateUserSettings,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
