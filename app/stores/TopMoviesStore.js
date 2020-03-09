import {moviesApi} from "../api/moviesApi";
import {BaseStore} from "./BaseStore";

class TopMoviesStore extends BaseStore {
  fetchMethod = moviesApi.getTopMovies;
}

export {TopMoviesStore}