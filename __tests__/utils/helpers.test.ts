import {formatAmount, getCurrencySymbol, wait} from '../../src/utils/helpers';

describe('helpers', () => {
  describe('formatAmount', () => {
    it('should format amount with USD currency', () => {
      expect(
        formatAmount({amount: 1500, currency: 'USD', roundToNearest: true}),
      ).toBe('1\u00A0500\u00A0$ ');
    });

    it('should format amount with EUR currency', () => {
      expect(
        formatAmount({amount: 1500, currency: 'EUR', roundToNearest: true}),
      ).toBe('1\u00A0500\u00A0€ ');
    });

    it('should format amount with decimals', () => {
      expect(formatAmount({amount: 1500.5, currency: 'USD'})).toBe(
        '1\u00A0500,50\u00A0$ ',
      );
    });
  });

  describe('getCurrencySymbol', () => {
    it('should return correct symbol for USD', () => {
      expect(getCurrencySymbol('USD')).toBe('$');
    });

    it('should return correct symbol for EUR', () => {
      expect(getCurrencySymbol('EUR')).toBe('€');
    });

    it('should return currency code if symbol not found', () => {
      expect(getCurrencySymbol('XYZ')).toBe('XYZ');
    });
  });

  describe('wait', () => {
    it('should wait for specified time', async () => {
      const start = Date.now();
      await wait(100);
      const end = Date.now();
      expect(end - start).toBeGreaterThanOrEqual(100);
    });
  });
});
