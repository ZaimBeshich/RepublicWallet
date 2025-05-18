import {ScaledSheet} from 'react-native-size-matters';
import {colors} from '../../res/colors';

export const styles = ScaledSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: '16@mvs',
    paddingHorizontal: '16@ms',
    backgroundColor: colors.background.primary,
  },
  title: {
    fontSize: '18@ms',
    fontWeight: '600',
    color: colors.text.primary,
  },
  backButton: {
    minWidth: '30@s',
  },
  backButtonText: {
    fontSize: '16@ms',
    color: colors.primary,
  },
});
