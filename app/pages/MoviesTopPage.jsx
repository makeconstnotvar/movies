import React, {Component} from "react";
import {inject, observer,} from "mobx-react";
import {Link} from "@reach/router";
import {Pager} from "controls/Pager";
import moment from "moment";
import {Progress} from "../controls/Progress";

const {useState} = require("react");

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

//react-reveal
  render() {
    let {$topMovies} = this.props;
    return (
      <div className="container">
        <h1 className="white">Лучшие фильмы <Progress isProgress={$topMovies.fetchProgress}/></h1>

        <div className={`movies grid5 gg-15 ${$topMovies.fetchProgress ? 'hidden' : ''}`}>
          {
            $topMovies.items.map(movie => <Item movie={movie}/>)
          }
        </div>
        <Pager total={$topMovies.count} path='/movies' onPageChange={this.onPageChange}/>
      </div>
    );
  }
}

const Item = props => {
  let [imgReady, setState] = useState(false);
  let {movie} = props;
  return (
    <Link className="movies-item mb-50 flex-col" key={movie.id} to={`/movie/${movie.id}`}>
      <img onLoad={() => setState(true)} className={`movie-cover mb-10 fade ${imgReady ? 'in' : ''}`} src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt=""/>
      <div className="movie-title">
        <span className="movie-vote inline-block mr-15" title="Рейтинг">{movie.vote_average}</span>
        <span className="ml-auto">{movie.title}</span>
      </div>
      <span className="grey-600">{moment(movie.release_date).format("DD MMMM YYYY")}</span>
    </Link>
  )
}
export {MoviesTopPage}