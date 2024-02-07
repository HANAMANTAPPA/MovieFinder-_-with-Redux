const initialstast = {
  list: [],
  favlist: [],
};

export default function reducer(state = initialstast, action) {
  if (action.type === "ADD_MOVIE") {
    return { ...state, list: action.movies };
  }
  return state;
}
