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

//3b24cb06263974486b5f783f9ad574d7
//eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYjI0Y2IwNjI2Mzk3NDQ4NmI1Zjc4M2Y5YWQ1NzRkNyIsInN1YiI6IjVlNjk1OGMwY2VkYWM0MDAxOTQ2NjdhZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lmWhXEYmBGZr5A8o12hyWAWKuyosuImQSkmprd1pMtg