import { useEffect, useState } from 'react';
import { getGenres, getPopularMovies } from '../services/MDBServices';

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
  release_date: string;
}

export const useMovieData = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [genreOptions, setGenreOptions] = useState<string[]>(["All"]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [moviesRes, genresRes] = await Promise.all([
          getPopularMovies(),
          getGenres(),
        ]);

        setMovies(moviesRes.slice(0, 5));

        const genreNames = genresRes
          .map((g: { name: string }) => g.name)
          .slice(0, 7);
        setGenreOptions(["All", ...genreNames]);
      } catch (error) {
        console.error("Error fetching movie data:", error);
      } 
    };

    fetchData();
  }, []);

  return { movies, genreOptions};
};