import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'center',
    backgroundColor: '#007AFF',
    paddingVertical: 12,
  },
  headerText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
  },
  insetInfo: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    lineHeight: 24,
  },
  footer: {
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 16,
    paddingVertical: 12,
    alignItems: 'center',
  },
  footerText: {
    color: '#333',
    fontSize: 14,
  },
})


//npm install react-native-reanimated react-native-worklets react-native-gesture-handler
//'react-native-worklets/plugin'