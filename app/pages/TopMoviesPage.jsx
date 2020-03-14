import React, {Component, Fragment} from "react";
import {inject, observer,} from "mobx-react";
import {Link} from "@reach/router";
import {Pager} from "../controls/Pager";

@inject('$topMovies', '$pager')
@observer
class TopMoviesPage extends Component {
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
        {
          $topMovies.items.map(movie => <div key={movie.id}>
            {movie.popularity} <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
          </div>)
        }
      </div>
    );
  }
}

export {TopMoviesPage}