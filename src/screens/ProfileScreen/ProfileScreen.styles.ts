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
  profileInfo: {
    alignItems: 'center',
    marginBottom: '32@mvs',
  },
  avatar: {
    width: '80@ms',
    height: '80@ms',
    borderRadius: '40@ms',
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '16@mvs',
  },
  avatarText: {
    fontSize: '32@ms',
    fontWeight: '600',
    color: colors.text.primary,
  },
  name: {
    fontSize: '24@ms',
    fontWeight: '600',
    color: colors.text.primary,
    marginBottom: '8@mvs',
  },
  balance: {
    fontSize: '18@ms',
    color: colors.text.secondary,
  },
  buttonsContainer: {
    gap: '16@mvs',
  },
});
