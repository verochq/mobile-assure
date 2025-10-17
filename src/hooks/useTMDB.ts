// mport { useState, useEffect } from 'react';
// import { TMDBMovie } from '../types/movies';
// import axios, { AxiosError } from 'axios';
// import { TMDB_ACCESS_TOKEN, TMDB_BASE_URL } from '@env';

// export const useTMDB = (endpoint: string) => {
//   const [data, setData] = useState<TMDBMovie[]>([]);
//   const [loading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setIsLoading(true);
//         setError(null);

//         const response = await axios.get(`${TMDB_BASE_URL}/movie/popular`, {
//           headers: {
//             Authorization: `Bearer ${TMDB_ACCESS_TOKEN}`,
//             'Content-Type': 'application/json',
//           },
//           params: {
//             language: 'en-US',
//             page: 1,
//           },
//         });

//         setData(response.data.results);
//         setIsLoading(false);
//       } catch (error) {
//         if (error instanceof AxiosError) {
//           console.error('TMDB API error:', error.response?.data || error.message);
//           setError(error.response?.data || error.message);
//         } else {
//           console.error('Unexpected error:', error);
//           setError('Unexpected error');
//         }
//       } finally {
//         setIsLoading(false);
//       }
//     }

//     fetchData();
//   }, [endpoint]);

//   return { data, loading, error };
// }