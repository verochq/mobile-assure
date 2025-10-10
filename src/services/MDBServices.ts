import axios, { AxiosError } from 'axios';

export const getPopularMovies = async () => {
  try {
    const apiKey = process.env.EXPO_PUBLIC_TMDB_API_KEY;
    const baseUrl = process.env.EXPO_PUBLIC_TMDB_BASE_URL;

    console.log("API Key usada:", apiKey);
    console.log("Base URL:", baseUrl);

    if (!apiKey || !baseUrl) {
      throw new Error("Faltan variables de entorno: EXPO_PUBLIC_TMDB_API_KEY o EXPO_PUBLIC_TMDB_BASE_URL");
    }

    const response = await axios.get(`${baseUrl}/movie/popular`, {
     
      params: {
        api_key: apiKey,
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