import {Component, Fragment} from "inferno";
import {inject, observer} from "inferno-mobx";

@inject('$movieDetails')
@observer
class MovieDetailsPage extends Component {
  componentDidMount = () => {
    let {$movieDetails} = this.props;
    $movieDetails.fullReset();
    this.fetch(this.props.id);
  };

  fetch = (id) => {
    let {$movieDetails} = this.props;
    $movieDetails.fetchItem(id).then(() => console.log($movieDetails.item));
  };

  render(nextProps, nextState, nextContext) {
    let {$movieDetails} = nextProps;
    return (
      <div className="container">
        <h1>Detail Page</h1>
        {
          $movieDetails.fetchDone &&
          <Fragment>
            <h3>{$movieDetails.item.title}</h3>
            <img style={{maxWidth: '100%'}} src={`https://image.tmdb.org/t/p/w500/${$movieDetails.item.poster_path}`} alt={$movieDetails.item.title}/>
            <div>{$movieDetails.item.overview}</div>
          </Fragment>
        }
      </div>
    );
  }
}

export {MovieDetailsPage}