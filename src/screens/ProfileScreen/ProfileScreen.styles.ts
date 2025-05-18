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
    marginTop: '24@mvs',
  },
  avatarContainer: {
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
  nameText: {
    fontSize: '24@ms',
    fontWeight: '600',
    color: colors.text.primary,
    marginBottom: '8@mvs',
  },
  balanceText: {
    fontSize: '20@ms',
    fontWeight: '500',
    color: colors.text.secondary,
  },
  buttonsContainer: {
    marginTop: '32@mvs',
    gap: '16@mvs',
  },
});
