import React, {Component, Fragment} from "react";
import {inject, observer,} from "mobx-react";
import {Link} from "@reach/router";
import {Pager} from "../controls/Pager";
import moment from "moment";

@inject('$topMovies', '$pager')
@observer
class MoviesTopPage extends Component {
  componentDidMount = () => {
    this.fetch();
  };

  fetch = () => {
    let {$topMovies, $pager} = this.props;
    $topMovies.fetchItems({page: $pager.currentPage});
  };

  onPageChange = page => {
    this.fetch();
  };

  render() {
    let {$topMovies} = this.props;
    return (
      <div className="container">
        <h1>Movies Page</h1>
        <Pager total={$topMovies.count} path='/movies' onPageChange={this.onPageChange}/>
        <div className="movies">
          {
            $topMovies.items.map(movie => <div className="movies-item p-20 mb-15 flex-row" key={movie.id}>
              <div className="movie-cover mr-20">
                <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt=""/>
              </div>
              <div>
                <div className="flex-row fs-32">
                  <span className="movie-vote inline-block mr-15" title="Рейтинг">{movie.vote_average}</span>
                  <Link className="movie-title" to={`/movie/${movie.id}`}>{movie.title}</Link>
                </div>
                <div className="mb-15">{movie.overview}</div>
                <div>Дата выхода на экран: {moment(movie.release_date).format("DD MMMM YYYY")}</div>
              </div>
            </div>)
          }
        </div>
      </div>
    );
  }
}

export {MoviesTopPage}