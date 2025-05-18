export const getCurrencySymbol = (currency: string): string => {
  const currencySymbols: {[key: string]: string} = {
    RUB: '₽',
    USD: '$',
    EUR: '€',
    GBP: '£',
    CNY: '¥',
    JPY: '¥',
    KZT: '₸',
    BYN: 'Br',
    UAH: '₴',
    CHF: 'Fr',
  };

  return currencySymbols[currency] || currency;
};

export const formatAmount = ({
  amount,
  currency,
  roundToNearest = false,
}: {
  amount: number;
  currency: string;
  roundToNearest?: boolean;
}) => {
  const formattedAmount = new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: roundToNearest ? 0 : 2,
    maximumFractionDigits: roundToNearest ? 0 : 2,
  });

  return `${formattedAmount.format(amount)} `;
};

export const wait = (ms: number): Promise<void> => {
  return new Promise(resolve => setTimeout(resolve, ms));
};
