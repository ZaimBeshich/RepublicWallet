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
  inputContainer: {
    marginBottom: '16@mvs',
  },
  label: {
    fontSize: '14@ms',
    fontWeight: '500',
    color: colors.text.secondary,
    marginBottom: '8@mvs',
  },
  input: {
    backgroundColor: colors.background.secondary,
    borderRadius: '12@ms',
    padding: '16@ms',
    fontSize: '16@ms',
    color: colors.text.primary,
  },
  buttonContainer: {
    paddingVertical: '12@mvs',
    borderTopWidth: 1,
    borderTopColor: colors.border.primary,
  },
});
