import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  segmentContainer: {
    position: 'absolute',
    top: 50,
    alignSelf: 'center',
    zIndex: 10,
  },
  gradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 120,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 13,
    left: 16,
    right: 16
  },
  overlay: {
    padding: 12,
    borderRadius: 12,
  },
  textRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 5,
  },
  buttonRow: {
    flexDirection: 'row',
    gap:15,
    justifyContent: 'space-between',
  },
});