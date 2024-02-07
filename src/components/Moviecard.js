import React from "react";
import { addFav, removeFav } from "../actions";

class Moviecard extends React.Component {
  handleAddFavmovie = () => {
    const { movie } = this.props;
    this.props.store.dispatch(addFav(movie));
    console.log(this.props.store.getState());
  };
  handleRemoveFavmovie = () => {
    const { movie } = this.props;
    this.props.store.dispatch(removeFav(movie));
    console.log(this.props.store.getState());
  };
  render() {
    const { movie, isFav } = this.props;
    return (
      <div className="movie-card">
        <div className="left">
          <img alt="movie-poster" src={movie.Poster} />
        </div>
        <div className="rigth">
          <div className="title">{movie.Title}</div>
          <div className="plot">{movie.Plot}</div>
          <div className="footer">
            <div className="rating"> {movie.imdbRating} / 10</div>
            {isFav ? (
              <button
                className="unfavourite-btn"
                onClick={this.handleRemoveFavmovie}
              >
                Unfavourite
              </button>
            ) : (
              <button
                className="favourite-btn"
                onClick={this.handleAddFavmovie}
              >
                Favourite
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Moviecard;
