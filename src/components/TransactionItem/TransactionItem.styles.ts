import {ScaledSheet} from 'react-native-size-matters';
import {colors} from '../../res/colors';

export const styles = ScaledSheet.create({
  transactionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: '8@mvs',
  },
  transactionBlock: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: '8@s',
    flexShrink: 1,
  },
  transactionInfo: {
    flexShrink: 1,
    flexDirection: 'column',
    gap: '8@vs',
    minWidth: 0,
  },
  amountContainer: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    flexShrink: 0,
  },
  amountText: {
    fontSize: '14@ms',
    fontWeight: '500',
    textAlign: 'right',
  },
  amountTextPlus: {
    color: colors.system.green,
  },
  amountTextMinus: {
    color: colors.system.red,
  },
  text: {
    color: colors.text.primary,
  },
  transactionDescription: {
    fontSize: '16@ms',
    fontWeight: '500',
    color: colors.text.primary,
  },
  transactionImage: {
    width: '24@ms',
    height: '24@ms',
  },
});
