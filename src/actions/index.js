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

// action creators
export function addmovies(movies) {
  return {
    type: ADD_MOVIES,
    movies,
  };
}
