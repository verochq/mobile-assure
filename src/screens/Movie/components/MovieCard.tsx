import { Image } from 'react-native';
import { styles } from './style';

interface MovieCardProps {
  posterPath: string;
}

export const MovieCard = ({ posterPath }: MovieCardProps) => {
  const imageUrlenv = process.env.EXPO_PUBLIC_TMDB_IMAGE_BASE_URL;
  const imageUrl = `${imageUrlenv}${posterPath}`;

  return (
    <Image
      source={{ uri: imageUrl }}
      style={styles.poster}
      resizeMode="cover"
    />
  );
};