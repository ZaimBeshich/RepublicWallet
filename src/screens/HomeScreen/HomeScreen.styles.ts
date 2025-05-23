import {StyleSheet} from 'react-native';
import {colors} from '../../res/colors';

export const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  subheaderContainer: {
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border.secondary,
  },
  subheaderText: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.text.primary,
  },
  spendText: {
    fontSize: 16,
    color: colors.text.secondary,
    marginTop: 8,
  },
});
