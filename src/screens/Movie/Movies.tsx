import { DAButton } from "@/src/components/atoms/DAButton/DAButton";
import DAListHeader from "@/src/components/atoms/DAListHeader/DAListHeader";
import { DAPagination } from "@/src/components/atoms/DAPagination/DAPagination";
import { DAText } from "@/src/components/atoms/DAText/DAText";
import { getPopularMovies } from "@/src/services/MDBServices";
import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useState } from "react";
import { Dimensions, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { MovieCard } from "./components/MovieCard";
import { styles } from "./styles";
interface Movie {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
  release_date: string;
}

const { width, height } = Dimensions.get("window");

const Movies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    getPopularMovies().then((res) => {
      setMovies(res.slice(0, 5));
      console.log("Active index:", activeIndex);
    });
  }, [activeIndex]);

  return (
    <View style={styles.container}>
      <View>
        <Carousel
          width={width}
          height={height * 0.65}
          data={movies}
          onProgressChange={(_, absoluteProgress) => {
            const index = Math.round(absoluteProgress);
            if (index !== activeIndex) {
              setActiveIndex(index);
            }
          }}
          renderItem={({ item }) => <MovieCard posterPath={item.poster_path} />}
        />
        <LinearGradient
          colors={["transparent", "rgba(0,0,0,1)"]}
          style={[styles.gradient]}
          pointerEvents="none"
        />
      </View>
      <View style={styles.ButtonContainer}>
        <View style={styles.overlay}>
          <View style={styles.textRow}>
            <DAText variant="subtitle">My list</DAText>
            <DAText variant="subtitle">Discover</DAText>
          </View>

          <View style={styles.buttonRow}>
            <DAButton
              title="Wishlist"
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
      <DAPagination
        count={5}
        index={activeIndex}
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 16,
        }}
      />
      <DAListHeader title="Marvel studios"/>
    </View>
  );
};

export default Movies;
