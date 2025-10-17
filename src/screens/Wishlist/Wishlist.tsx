import DAText from '@/src/components/atoms/DAText/DAText';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { colors } from '../../../constants/colors';

const Wishlist = () => {
  return (
    <View style={styles.container}>
      <DAText variant="title">Wishlist</DAText>
      <DAText variant="body" style={styles.subtitle}>
        Your saved items will appear here...
      </DAText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  subtitle: {
    marginTop: 8,
  },
});

export default Wishlist;