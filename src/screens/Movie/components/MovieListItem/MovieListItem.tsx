import { Image, Text, View } from 'react-native';
import { styles } from "./styles";

interface MovieListItemProps {
  posterPath: string;
  title: string;
}

const MovieListItem = ({ posterPath, title }: MovieListItemProps) => {
  const imageUrlenv = process.env.EXPO_PUBLIC_TMDB_IMAGE_BASE_URL;
  const imageUrl = `${imageUrlenv}${posterPath}`;


  return (
    <View style={styles.container}>
      <Image
        source={{ uri: imageUrl }}
        style={styles.poster}
        resizeMode="cover"
      />
      <Text style={styles.title} numberOfLines={1}>
        {title}
      </Text>
    </View>
  );
};



export default MovieListItem;