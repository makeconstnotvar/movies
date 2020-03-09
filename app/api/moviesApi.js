import axios from 'axios';

const def = {api_key: '03b8572954325680265531140190fd2a', language: 'ru-RU'};
const moviesApi = {
  getTopMovies: async (params) => {
    Object.assign(params, def);
    let response = await axios.get('https://api.themoviedb.org/3/movie/top_rated', {params});
    return response.data;
  },
  getMovieDetails: async (id) => {
    let response = await axios.get(`https://api.themoviedb.org/3/movie/${id}`, {params: def});
    return response.data;
  }
};
export {moviesApi}