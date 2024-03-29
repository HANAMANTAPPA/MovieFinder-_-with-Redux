// {
//   type: "ADD_MOVIE",
//     movies : [m1] ,
// }
// {
//   type: "decrease",
//     movies : [] ,
// }

// action type
export const ADD_MOVIES = "ADD_MOVIES";
export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";
export const FAV_TAB = "FAV_TAB";
export const MOVIE_TAB = "MOVIE_TAB";
export const ADD_MOVIE_TOLIST = "ADD_MOVIE_TOLIST";

//  action creators
export function addmovies(movies) {
  return {
    type: ADD_MOVIES,
    movies,
  };
}

export function addFav(movie) {
  return {
    type: ADD_FAV,
    movie,
  };
}

export function removeFav(movie) {
  return {
    type: REMOVE_FAV,
    movie,
  };
}

export function movieTabswitch() {
  return {
    type: MOVIE_TAB,
  };
}

export function favTabswitch() {
  return {
    type: FAV_TAB,
  };
}

export function addMovietoList(movie) {
  return {
    type: ADD_MOVIE_TOLIST,
    movie,
  };
}
