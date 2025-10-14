import { StyleSheet } from 'react-native';
import { colors } from '../../../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: colors.background,
  },
  title: {
    color: colors.textPrimary,
    fontSize: 16,
    fontWeight: '500',
  },
  seeMore: {
    color: colors.buttonPrimary, 
    fontSize: 16,
    fontWeight: '500',
  },
});