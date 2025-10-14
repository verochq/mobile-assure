import axios, { AxiosError } from "axios";

const apiKey = process.env.EXPO_PUBLIC_TMDB_API_KEY;
const baseUrl = process.env.EXPO_PUBLIC_TMDB_BASE_URL;

export const getPopularMovies = async () => {
  try {
    if (!apiKey || !baseUrl) {
      throw new Error(
        "Faltan variables de entorno: EXPO_PUBLIC_TMDB_API_KEY o EXPO_PUBLIC_TMDB_BASE_URL"
      );
    }

    const response = await axios.get(`${baseUrl}/movie/popular`, {
      params: {
        api_key: apiKey,
        language: "en-US",
        page: 1,
      },
    });

    return response.data.results;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error("TMDB API error:", error.response?.data || error.message);
    } else {
      console.error("Unexpected error:", error);
    }
  }
};

export const getGenres = async () => {
  try {
    if (!apiKey || !baseUrl) {
      throw new Error(
        "Faltan variables de entorno: EXPO_PUBLIC_TMDB_API_KEY o EXPO_PUBLIC_TMDB_BASE_URL"
      );
    }

    const response = await axios.get(`${baseUrl}/genre/movie/list`, {
      params: {
        api_key: apiKey,
        language: "en-US",
      },
    });

    return response.data.genres;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error("TMDB API error:", error.response?.data || error.message);
    } else {
      console.error("Unexpected error:", error);
    }
  }
};
