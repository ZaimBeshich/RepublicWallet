import {ScaledSheet} from 'react-native-size-matters';
import {colors} from '../../res/colors';

export const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.primary,
  },
  content: {
    flex: 1,
    padding: '16@ms',
  },
  transactionInfo: {
    backgroundColor: colors.background.secondary,
    borderRadius: '12@ms',
    padding: '16@ms',
    marginBottom: '16@mvs',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '12@mvs',
  },
  label: {
    fontSize: '14@ms',
    color: colors.text.secondary,
  },
  value: {
    fontSize: '16@ms',
    color: colors.text.primary,
    fontWeight: '500',
  },
  amount: {
    fontSize: '24@ms',
    fontWeight: '600',
    color: colors.text.primary,
    textAlign: 'center',
    marginVertical: '24@mvs',
  },
  status: {
    fontSize: '16@ms',
    fontWeight: '500',
    color: colors.text.primary,
    textAlign: 'center',
    marginBottom: '24@mvs',
  },
});
