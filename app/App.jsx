import {Component} from "inferno";
import {BrowserRouter, Route} from "inferno-router";
import {Provider} from "inferno-mobx";
import {getStores} from "stores/store";
import {AboutPage} from "pages/AboutPage";
import {MoviesTopPage} from "pages/MoviesTopPage";
import {MovieDetailsPage} from "pages/MovieDetailsPage";
import {MainPage} from "pages/MainPage";
import {MasterLayout} from "layouts/MasterLayout";
import {ResponsivePage} from "pages/ResponsivePage";

class App extends Component {
  componentDidMount() {
    console.log(this.props)
  }

  render(props, state, context) {
    return (
      <Provider {...getStores()}>
        <BrowserRouter>
          <MasterLayout>
            <Route exact path="/" component={MainPage}/>
            <Route path="/movie/:id" component={MovieDetailsPage}/>
            <Route path="/movies/top" component={MoviesTopPage}/>
            <Route path="/about" component={AboutPage}/>
            <Route path="/responsive" component={ResponsivePage}/>
          </MasterLayout>
        </BrowserRouter>
      </Provider>
    );
  }
}

export {App}