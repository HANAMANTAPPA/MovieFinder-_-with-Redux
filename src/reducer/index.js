export default function reducer(state = [], action) {
  if (action.type === "ADD_MOVIE") {
    return action.movies;
  }
  return state;
}
