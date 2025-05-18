export type TCurrency = 'USD' | 'EUR' | 'GBP' | 'RUB';

export type TTransaction = {
  id: number;
  amount: number;
  currency: TCurrency;
  date: Date;
  type: 'income' | 'expense';
  category: string;
  title: string;
};

export enum ICurrencySymbol {
  USD = '$',
  EUR = '€',
  GBP = '£',
  RUB = '₽',
}
