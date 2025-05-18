import {ScaledSheet} from 'react-native-size-matters';
import {colors} from '../../res/colors';

export const styles = ScaledSheet.create({
  flex: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: '16@ms',
  },
  subheaderContainer: {
    paddingVertical: '4@mvs',
  },
  subheaderText: {
    textAlign: 'center',
    fontSize: '18@ms',
    fontWeight: '500',
    color: colors.text.primary,
  },
});
