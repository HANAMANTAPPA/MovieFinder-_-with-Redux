import { ADD_MOVIES, ADD_FAV, REMOVE_FAV } from "../actions";

const initialstast = {
  list: [],
  favlist: [],
};

export default function reducer(state = initialstast, action) {
  switch (action.type) {
    case ADD_MOVIES:
      return { ...state, list: action.movies };
    case ADD_FAV:
      return { ...state, favlist: [action.movie, ...state.favlist] };
    case REMOVE_FAV:
      //   const index = state.favlist.indexOf(action.movie);
      const newFavList = state.favlist.filter(
        (movie) => movie !== action.movie
      );
      return { ...state, favlist: [...newFavList] };
    default:
      return state;
  }
}
