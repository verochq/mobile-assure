import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  scrollContainer: {
    height: 50, 
    alignSelf: 'center', 
  },
  contentContainer: {
    paddingHorizontal: 8,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(106, 101, 101, 0.25)',
    borderRadius: 20,
    paddingVertical: 4,
  },
  button: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 16,
  },
  buttonActive: {
    backgroundColor: '#FFFFFF',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500',
  },
  textActive: {
    color: '#000000',
    fontWeight: '700',
  },
});