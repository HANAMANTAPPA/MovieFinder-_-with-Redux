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
