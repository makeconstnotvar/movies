import React, {Component, useState} from 'react';
import {inject, observer} from "mobx-react";
import {Link} from "react-router-dom";
import {Pager} from "controls/Pager";
import moment from "moment";
import {Progress} from "../controls/Progress";
import qs from 'qs';
import isEqual from 'lodash/isEqual';

@inject('$topMovies', '$pager')
@observer
class MoviesTopPage extends Component {
  componentDidMount() {
    //this.props.history.replace(location.pathname + '?a=1&b=2')
    this.fetch();

  };

  componentDidUpdate(prevProps) {
    console.log('-MoviesTopPage-')
    let oldQuery = qs.parse(prevProps.location.search, {ignoreQueryPrefix: true});
    let newQuery = qs.parse(this.props.location.search, {ignoreQueryPrefix: true});
    let {$pager} = this.props;
    $pager.setCurrentPage(newQuery.page)
    let eq = isEqual(oldQuery, newQuery)
    if (!eq)
      this.fetch();

    console.log(prevProps, this.props)
  };

  fetch = async () => {
    let {$topMovies, $pager} = this.props;
    await $topMovies.fetchItems({page: $pager.currentPage});
    $pager.total = $topMovies.total
  };

//react-reveal
  render() {
    let {$topMovies} = this.props;
    return (
      <div className="container">
        <h1 className="white">Лучшие фильмы <Progress isProgress={$topMovies.fetchProgress}/></h1>
        <Pager/>
        <div className={`movies grid5 gg-15 ${$topMovies.fetchProgress ? 'hidden' : ''}`}>
          {
            $topMovies.items.map(movie => <Item key={movie.id} movie={movie}/>)
          }
        </div>

      </div>
    );
  }
}

const Item = props => {
  let [imgReady, setState] = useState(false);
  let {movie} = props;
  return (
    <Link className="movies-item mb-50 flex-col" key={movie.id} to={`/movie/${movie.id}`}>
      <img onLoad={() => setState({imgReady: true})} className={`movie-cover mb-10 fade ${imgReady ? 'in' : ''}`} src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt=""/>
      <div className="movie-title">
        <span className="movie-vote inline-block mr-15" title="Рейтинг">{movie.vote_average}</span>
        <span className="ml-auto">{movie.title}</span>
      </div>
      <span className="grey-600">{moment(movie.release_date).format("DD MMMM YYYY")}</span>
    </Link>
  )
};

export {MoviesTopPage}