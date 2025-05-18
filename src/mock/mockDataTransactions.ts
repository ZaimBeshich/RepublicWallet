export type TransactionType = 'income' | 'expense' | 'transfer';

export interface Transaction {
  id: string;
  type: TransactionType;
  amount: number;
  currency: string;
  category: string;
  description: string;
  date: string;
  status: 'completed' | 'pending' | 'failed';
}

export const mockTransactions: Transaction[] = [
  {
    id: 'TRX-8F4D-9E2A-1B5C',
    type: 'income',
    amount: 5000,
    currency: 'EUR',
    category: 'Salary',
    description: 'March salary payment',
    date: '2024-03-15T10:00:00Z',
    status: 'completed',
  },
  {
    id: 'TRX-7G3E-2F9B-4C8D',
    type: 'expense',
    amount: 2500,
    currency: 'RUB',
    category: 'Groceries',
    description: 'Grocery shopping at Pyaterochka',
    date: '2024-03-14T15:30:00Z',
    status: 'completed',
  },
  {
    id: 'TRX-5H2D-8A4C-6E9F',
    type: 'transfer',
    amount: 10000,
    currency: 'RUB',
    category: 'Transfer',
    description: 'Money transfer to friend',
    date: '2024-03-13T12:15:00Z',
    status: 'completed',
  },
  {
    id: 'TRX-9B6C-3D7E-1F8A',
    type: 'expense',
    amount: 1500,
    currency: 'RUB',
    category: 'Transport',
    description: 'Taxi ride',
    date: '2024-03-12T20:45:00Z',
    status: 'completed',
  },
  {
    id: 'TRX-4C9D-2E5F-7B8A',
    type: 'income',
    amount: 20000,
    currency: 'USD',
    category: 'Freelance',
    description: 'Project payment',
    date: '2024-03-11T14:20:00Z',
    status: 'pending',
  },
  {
    id: 'TRX-1A8B-6C4D-9E2F',
    type: 'expense',
    amount: 3500,
    currency: 'RUB',
    category: 'Entertainment',
    description: 'Cinema tickets',
    date: '2024-03-10T19:00:00Z',
    status: 'completed',
  },
];
