export type TransactionType = 'income' | 'expense' | 'transfer';
export type TransactionStatus = 'completed' | 'pending' | 'failed';

export interface Transaction {
  id: string;
  type: TransactionType;
  amount: number;
  currency: string;
  category: string;
  description: string;
  date: string;
  status: TransactionStatus;
}

export interface UserSettings {
  monthlyLimit: number;
  displayCurrency: string;
  availableCurrencies: string[];
}

export interface User {
  id: string;
  name: string;
  surname: string;
  phoneNumber: string;
  walletId: string;
  balance: number;
  settings: UserSettings;
}

export interface ApiResponse<T> {
  data: T;
  status: number;
  message?: string;
}
