import axios, { AxiosError } from 'axios';

export const getPopularMovies = async () => {
  try {
    const response = await axios.get(`${process.env.EXPO_PUBLIC_TMDB_BASE_URL}/movie/popular`, {
      headers: {
        Authorization: `Bearer ${ process.env.EXPO_PUBLIC_SECRET_KEY }`,
        'Content-Type': 'application/json',
      },
      params: {
        language: 'en-US',
        page: 1,
      },
    });

    return response.data.results;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error('TMDB API error:', error.response?.data || error.message);
    } else {
      console.error('Unexpected error:', error);
    }
  }
};