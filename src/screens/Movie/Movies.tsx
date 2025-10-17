import { useMovieData } from "@/src/hooks/useMovieData";
import { useMoviesByGenreName } from "@/src/hooks/useMoviesByGenre";
import React, { useRef, useState } from "react";
import { Dimensions, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useSharedValue } from "react-native-reanimated";
import Carousel, {
  ICarouselInstance,
  Pagination,
} from "react-native-reanimated-carousel";
import MovieCard from "./components/MovieCard/MovieCard";
import MovieHeader from "./components/MovieHeader/MovieHeader";
import MovieList from "./components/MovieList/MovieList";
import { styles } from "./styles";

const { width, height } = Dimensions.get("window");





const Movies = () => {
  const {moviesByGenre} = useMoviesByGenreName("Action");
  
  const { movies, genreOptions } = useMovieData();
  const [selectedGenre, setSelectedGenre] = useState("All");
  const ref = useRef<ICarouselInstance>(null);
  const progress = useSharedValue<number>(0);

  const onPressPagination = (index: number) => {
    ref.current?.scrollTo({
      count: index - progress.value,
      animated: true,
    });
  };

  return (
    <View style={styles.container}>
      
      <ScrollView>

      <View style={{ height: height * 0.65, position:"relative" }}>
        <Carousel
        ref={ref}
        width={width}
        height={height * 0.65}
        data={movies}
        onProgressChange={progress}
        renderItem={({ item }) => <MovieCard posterPath={item.poster_path} />}
      />
        <MovieHeader
        genreOptions={genreOptions}
        selectedGenre={selectedGenre}
        onGenreChange={setSelectedGenre}
      />
      </View>

      

      

      <Pagination.Basic
        progress={progress}
        data={movies}
        containerStyle={styles.paginationContainer}
        dotStyle={styles.paginationDot}
        activeDotStyle={styles.paginationActiveDot}
        onPress={onPressPagination}
      />

      <MovieList title="Action" data={moviesByGenre}/>
      <MovieList title="Popular" data={movies}/>
      </ScrollView>
    </View>
  );
};

export default Movies;