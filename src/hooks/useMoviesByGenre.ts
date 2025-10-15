import { getMovieByGenre, } from '@/src/services/MDBServices';
import { useEffect, useState } from 'react';

export const useMoviesByGenreName = (genreName: string) => {
  const [moviesByGenre, setMoviesmoviesByGenre] = useState<any[]>([]);

  useEffect(() => {
    const fetch = async () => {
      const data = await getMovieByGenre(genreName); 
      setMoviesmoviesByGenre(data);
    };
    fetch();
  }, [genreName]);

  return { moviesByGenre };
};