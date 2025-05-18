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
  settingsBlock: {
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
  input: {
    backgroundColor: colors.background.primary,
    borderRadius: '8@ms',
    padding: '12@ms',
    fontSize: '16@ms',
    color: colors.text.primary,
    width: '120@ms',
    textAlign: 'right',
  },
  currencySelector: {
    backgroundColor: colors.background.primary,
    borderRadius: '8@ms',
    padding: '12@ms',
    minWidth: '120@ms',
  },
  currencyText: {
    fontSize: '16@ms',
    color: colors.text.primary,
    textAlign: 'right',
  },
  buttonContainer: {
    paddingVertical: '12@mvs',
    borderTopWidth: 1,
    borderTopColor: colors.border.primary,
  },
});
