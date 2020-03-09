import {MovieDetailsStore} from "./MovieDetailsStore";
import {ModalStore} from "./ModalStore";
import {PagerStore} from "./PagerStore";
import {TopMoviesStore} from "./TopMoviesStore";

let store = {
  $modal: new ModalStore(),
  $pager: new PagerStore(),
  $topMovies: new TopMoviesStore(),
  $movieDetails: new MovieDetailsStore()
};

export {store}