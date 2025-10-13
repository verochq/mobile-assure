import React from 'react';
import { View } from 'react-native';
import { styles } from './style'; 
interface DAPaginationProps {
  count: number;
  index: number;
}

export const DAPagination = ({ count, index }: DAPaginationProps) => {
  return (
    <View style={styles.container}>
      {Array.from({ length: count }).map((_, i) => (
        <View
          key={i}
          style={[
            styles.dot,
            {
              backgroundColor:
                i === index ? '#FFC107' : 'rgba(255, 255, 255, 0.4)',
            },
          ]}
        />
      ))}
    </View>
  );
};