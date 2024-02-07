import {
  ADD_MOVIES,
  ADD_FAV,
  REMOVE_FAV,
  FAV_TAB,
  MOVIE_TAB,
} from "../actions";

const initialstast = {
  list: [],
  favlist: [],
  moviTab: true,
  favTab: false,
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
    case MOVIE_TAB:
      return { ...state, moviTab: true, favTab: false };

    case FAV_TAB:
      return { ...state, moviTab: false, favTab: true };
    default:
      return state;
  }
}
