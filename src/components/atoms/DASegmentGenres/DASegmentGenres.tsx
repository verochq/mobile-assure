import React, { useState } from 'react';
import {
  ScrollView,
  Text,
  TouchableOpacity
} from 'react-native';
import { styles } from "./style";

interface GenreSegmentedControlProps {
  options: string[]; 
  onValueChange: (option: string) => void;
  initialIndex?: number;
}

const GenreSegmentedControl = ({
  options,
  onValueChange,
  initialIndex = 0,
}: GenreSegmentedControlProps) => {
  const [selectedIndex, setSelectedIndex] = useState(initialIndex);

  const handlePress = (index: number, option: string) => {
    setSelectedIndex(index);
    onValueChange(option);
  };

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      {options.map((option, index) => (
        <TouchableOpacity
          key={option}
          style={[
            styles.button,
            selectedIndex === index && styles.buttonActive,
          ]}
          onPress={() => handlePress(index, option)}
        >
          <Text
            style={[
              styles.text,
              selectedIndex === index && styles.textActive,
            ]}
          >
            {option}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};



export default GenreSegmentedControl;