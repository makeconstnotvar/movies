import {moviesApi} from "../api/moviesApi";
import {BaseStore} from "./BaseStore";

class MovieDetailsStore extends BaseStore {
  fetchMethod = moviesApi.getMovieDetails;
}

export {MovieDetailsStore}