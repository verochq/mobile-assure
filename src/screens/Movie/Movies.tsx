import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useRef, useState } from "react";
import { Dimensions, View } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import Carousel, {
  ICarouselInstance,
  Pagination,
} from "react-native-reanimated-carousel";
import DAButton from "../../components/atoms/DAButton/DAButton";
import DAText from "../../components/atoms/DAText/DAText";
import { getGenres, getPopularMovies } from "../../services/MDBServices";
import MovieCard from "./components/MovieCard/MovieCard";
import MovieList from "./components/MovieList/MovieList";
import { styles } from "./styles";

const { width, height } = Dimensions.get("window");

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
  release_date: string;
}

const Movies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [genreOptions, setGenreOptions] = useState<string[]>(["All"]);
  const [selectedGenre, setSelectedGenre] = useState("All");
  const ref = useRef<ICarouselInstance>(null);
  const progress = useSharedValue<number>(0);

  const onPressPagination = (index: number) => {
    ref.current?.scrollTo({
      count: index - progress.value,
      animated: true,
    });
  };

  useEffect(() => {
    getPopularMovies().then((res) => {
      setMovies(res.slice(0, 5));
    });
    getGenres().then((res) => {
      const genreNames = res
        .map((mov: { name: string }) => mov.name)
        .slice(0, 7);
      setGenreOptions(["All", ...genreNames]);
      console.log("data genre:", genreNames);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Carousel
        ref={ref}
        width={width}
        height={height * 0.65}
        data={movies}
        onProgressChange={progress}
        renderItem={({ item }) => <MovieCard posterPath={item.poster_path} />}
      />

      <LinearGradient
        colors={["rgba(0,0,0,0)", "rgba(0,0,0,0.8)", "rgba(0,0,0,1)"]}
        style={styles.gradient}
      />

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

      <Pagination.Basic
        progress={progress}
        data={movies}
        containerStyle={styles.paginationContainer}
        dotStyle={styles.paginationDot}
        activeDotStyle={styles.paginationActiveDot}
        onPress={onPressPagination}
      />

      <MovieList title="New releases" data={movies} />

      {/* <GenreSegmentedControl
        options={genreOptions}
        onValueChange={(genre) => {
          setSelectedGenre(genre);
          console.log("Género seleccionado:", genre);
        }}
      /> */}
    </View>
  );
};

export default Movies;
