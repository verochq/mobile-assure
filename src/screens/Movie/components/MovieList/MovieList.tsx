import DAListHeader from '@/src/components/atoms/DAListHeader/DAListHeader';
import React from 'react';
import { FlatList, View } from 'react-native';
import MovieListItem from '../MovieListItem/MovieListItem';
import { styles } from "./styles";

interface MovieListProps {
  title: string;
  data: { id: number; title: string; poster_path: string }[];
}

const MovieList = ({ title, data }: MovieListProps) => {
  return (
    <View style={styles.container}>
      <DAListHeader title={title}/>
      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <MovieListItem
            posterPath={item.poster_path}
            title={item.title}
          />
        )}
      />
    </View>
  );
};


export default MovieList;