import React from 'react';
import { View, ViewProps } from 'react-native';

interface DAPaginationProps {
  count: number; 
  index: number;
  style?: ViewProps['style'];
}

export const DAPagination = ({ count, index, style }: DAPaginationProps) => {
  return (
    <View style={style}>
      {Array.from({ length: count }).map((_, i) => (
        <View
          key={i}
          style={{
            width: 6,
            height: 6,
            borderRadius: 3,
            marginHorizontal: 4,
            backgroundColor: i === index ? '#FFC107' : 'rgba(255, 255, 255, 0.4)',
          }}
        />
      ))}
    </View>
  );
};