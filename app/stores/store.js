import {MovieDetailsStore} from "./MovieDetailsStore";
import {ModalStore} from "./ModalStore";
import {PagerStore} from "./PagerStore";
import {TopMoviesStore} from "./TopMoviesStore";

function getStores(initState = {}) {
  return {
    $modal: new ModalStore({state: initState.$modal}),
    $pager: new PagerStore({state: initState.$pager}),
    $topMovies: new TopMoviesStore({state: initState.$topMovies}),
    $movieDetails: new MovieDetailsStore({state: initState.$movieDetails})
  };
}

export {getStores}