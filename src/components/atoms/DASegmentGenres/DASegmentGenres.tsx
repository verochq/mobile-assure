import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
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
    <View style={{backgroundColor:"rgba(202, 184, 184, 0.24)", display:"flex", flexDirection:"row", borderRadius:20, padding:1}}>
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
     </View> 
    </ScrollView>
  );
};

export default GenreSegmentedControl;