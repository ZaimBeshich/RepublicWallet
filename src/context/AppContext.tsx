import React, {createContext, useContext, useState} from 'react';
import {Transaction, User, Settings} from '../types/api';
import {api} from '../services/api';

interface AppContextType {
  transactions: Transaction[];
  user: User | null;
  settings: Settings | null;
  isTransactionsLoading: boolean;
  isUserLoading: boolean;
  isSettingsLoading: boolean;
  error: string | null;
  init: () => Promise<void>;
  refreshTransactions: () => Promise<void>;
  updateUser: (userData: Partial<User>) => Promise<void>;
  updateSettings: (settingsData: Partial<Settings>) => Promise<void>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{children: React.ReactNode}> = ({
  children,
}) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [user, setUser] = useState<User | null>(null);
  const [settings, setSettings] = useState<Settings | null>(null);
  const [isTransactionsLoading, setIsTransactionsLoading] = useState(false);
  const [isUserLoading, setIsUserLoading] = useState(false);
  const [isSettingsLoading, setIsSettingsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const init = async () => {
    setIsTransactionsLoading(true);
    setIsUserLoading(true);
    setIsSettingsLoading(true);
    setError(null);
    try {
      const [transactionsRes, userRes, settingsRes] = await Promise.all([
        api.getTransactions(),
        api.getUser(),
        api.getSettings(),
      ]);

      setTransactions(transactionsRes.data);
      setUser(userRes.data);
      setSettings(settingsRes.data);
    } catch (err) {
      setError('Failed to fetch data');
      console.error('Error fetching data:', err);
    } finally {
      setIsTransactionsLoading(false);
      setIsUserLoading(false);
      setIsSettingsLoading(false);
    }
  };

  const refreshTransactions = async () => {
    setIsTransactionsLoading(true);
    try {
      const {data} = await api.getTransactions();
      setTransactions(data);
    } catch (err) {
      setError('Failed to refresh transactions');
      console.error('Error refreshing transactions:', err);
    } finally {
      setIsTransactionsLoading(false);
    }
  };

  const updateUser = async (userData: Partial<User>) => {
    setIsUserLoading(true);
    try {
      const {data} = await api.updateUser(userData);
      setUser(data);
    } catch (err) {
      setError('Failed to update user');
      console.error('Error updating user:', err);
    } finally {
      setIsUserLoading(false);
    }
  };

  const updateSettings = async (settingsData: Partial<Settings>) => {
    setIsSettingsLoading(true);
    try {
      const {data} = await api.updateSettings(settingsData);
      setSettings(data);
    } catch (err) {
      setError('Failed to update settings');
      console.error('Error updating settings:', err);
    } finally {
      setIsSettingsLoading(false);
    }
  };

  const value = {
    transactions,
    user,
    settings,
    isTransactionsLoading,
    isUserLoading,
    isSettingsLoading,
    error,
    init,
    refreshTransactions,
    updateUser,
    updateSettings,
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
