import { combineReducers } from "redux";

import {
  ADD_MOVIES,
  ADD_FAV,
  REMOVE_FAV,
  FAV_TAB,
  MOVIE_TAB,
  ADD_MOVIE_TOLIST,
} from "../actions";

const initialMoviestast = {
  list: [],
  favlist: [],
  moviTab: true,
  favTab: false,
};

export function movies(state = initialMoviestast, action) {
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
    case ADD_MOVIE_TOLIST:
      return { ...state, list: [action.movie, state.list] };
    case MOVIE_TAB:
      return { ...state, moviTab: true, favTab: false };

    case FAV_TAB:
      return { ...state, moviTab: false, favTab: true };
    default:
      return state;
  }
}

const initialsearchState = {
  result: {},
};
export function search(state = initialsearchState, action) {
  return state;
}

// const initialRootState = {
//   movies: initialMoviestast,
//   search: initialsearchState,

// };
// export default function rootReducer(state = initialRootState, action) {
//   return {
//     movies: movies(state.movies, action),
//     search: search(state.search, action),
//   };
// }

export default combineReducers({
  movies,
  search,
});
