import "../App.css";
import { data } from "../data";
import Navbar from "./Navbar";
import React from "react";
import Moviecard from "./Moviecard";

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

  render() {
    const { list } = this.props.store.getState();
    console.log("RENDER");
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className="tab">Movies</div>
            <div className="tab">Favourites</div>
          </div>

          <div className="list">
            {list.map((movie, index) => (
              <Moviecard
                movie={movie}
                store={this.props.store}
                isFav={this.isMovieFav(movie)}
                key={`movie-${index}`}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
