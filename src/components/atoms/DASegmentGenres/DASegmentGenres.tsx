import React from 'react';
import { ScrollView, Text, TouchableOpacity } from 'react-native';
import { styles } from "./style";

interface GenreSegmentedControlProps {
  options: string[];
  onValueChange: (option: string) => void;
  selectedOption: string;
}

const GenreSegmentedControl = ({
  options,
  onValueChange,
  selectedOption,
}: GenreSegmentedControlProps) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      {options.map((option) => (
        <TouchableOpacity
          key={option}
          style={[
            styles.button,
            selectedOption === option && styles.buttonActive,
          ]}
          onPress={() => onValueChange(option)}
        >
          <Text
            style={[
              styles.text,
              selectedOption === option && styles.textActive,
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