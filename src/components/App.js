import "../App.css";
import { data } from "../data";
import Navbar from "./Navbar";
import React from "react";
import Moviecard from "./Moviecard";
import { movieTabswitch, favTabswitch } from "../actions";

class App extends React.Component {
  componentDidMount() {
    const { store } = this.props;

    store.subscribe(() => {
      console.log("UPDATED");
      this.forceUpdate();
    });
    /// make Api call
    // dispatch app
    store.dispatch({
      type: "ADD_MOVIES",
      movies: data,
    });
    console.log(this.props.store.getState());
  }

  isMovieFav = (movie) => {
    const { favlist } = this.props.store.getState();
    const index = favlist.indexOf(movie);
    if (index !== -1) {
      return true;
    }
    return false;
  };

  handleMovieTab = () => {
    this.props.store.dispatch(movieTabswitch());
  };
  handleFavTab = () => {
    this.props.store.dispatch(favTabswitch());
  };
  render() {
    const { list, favlist, moviTab } = this.props.store.getState();
    const iteratingList = moviTab ? list : favlist;
    console.log("RENDER");
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div
              className={`tab ${moviTab ? "active-tabs" : ""}`}
              onClick={this.handleMovieTab}
            >
              Movies
            </div>
            <div
              className={`tab ${moviTab ? "" : "active-tabs"}`}
              onClick={this.handleFavTab}
            >
              Favourites
            </div>
          </div>

          <div className="list">
            {iteratingList.map((movie, index) => (
              <Moviecard
                movie={movie}
                store={this.props.store}
                isFav={this.isMovieFav(movie)}
                key={`movie-${index}`}
              />
            ))}
          </div>
          {iteratingList.length === 0 ? (
            <div className="no-movies"> No movies to display</div>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}

export default App;
