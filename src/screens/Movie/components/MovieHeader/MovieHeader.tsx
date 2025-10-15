import GenreSegmentedControl from "@/src/components/atoms/DASegmentGenres/DASegmentGenres";
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { View } from 'react-native';
import DAButton from "../../../../components/atoms/DAButton/DAButton";
import DAText from "../../../../components/atoms/DAText/DAText";
import { styles } from "./styles";
interface MovieHeaderProps {
  genreOptions: string[];
  selectedGenre: string;
  onGenreChange: (genre: string) => void;
}

const MovieHeader = ({ genreOptions, selectedGenre, onGenreChange }: MovieHeaderProps) => {
  return (
    <>
      <View style={styles.segmentContainer}>
        <GenreSegmentedControl
          options={genreOptions}
          selectedOption={selectedGenre}
          onValueChange={onGenreChange}
        />
      </View>

      <LinearGradient
        colors={["rgba(0,0,0,0)", "rgba(0,0,0,0.8)", "rgba(0,0,0,1)"]}
        style={styles.gradient}
      />

      <View style={styles.buttonContainer}>
        <View style={styles.overlay}>
          <View style={styles.textRow}>
            <DAText variant="subtitle">My list</DAText>
            <DAText variant="subtitle">Discover</DAText>
          </View>
          <View style={styles.buttonRow}>
            <DAButton
              title="+ Wishlist"
              variant="secondary"
              onPress={() => console.log("Wishlist pressed")}
            />
            <DAButton
              title="Details"
              variant="primary"
              onPress={() => console.log("Details pressed")}
            />
          </View>
        </View>
      </View>
    </>
  );
};



export default MovieHeader;