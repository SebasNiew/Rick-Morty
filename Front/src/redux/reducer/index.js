import {
  ADD_CHARACTER,
  DELETE_CHARACTER,
  FILTER,
  ORDER,
} from "../actions/types";

const initialState = {
  myFavorites: [],
  allCharacters: [],
  errors: {},
};

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_CHARACTER:
      return {
        ...state,
        myFavorites: payload,
        allCharacters: payload,
        errors: {},
      };
    case DELETE_CHARACTER:
      return {
        ...state,
        myFavorites: payload,
        errors: {},
      };
    case FILTER:
      const filtered = state.allCharacters.filter(
        (pj) => pj.gender === payload
      );
      return {
        ...state,
        myFavorites: payload === "All" ? state.allCharacters : filtered,
      };
    case ORDER:
      console.log("soy yo");
      // eslint-disable-next-line array-callback-return
      const sorted = state.myFavorites.sort((a, b) => {
        if (payload === "descendente") {
          if (a.id < b.id) return -1;
          else if (b.id < a.id) return 1;
        } else {
          if (a.id < b.id) return 1;
          else if (b.id < a.id) return -1;
        }
      });
      return {
        ...state,
        myFavorites: [...sorted],
      };
    case "GET_FAVS":
      return {
        ...state,
        myFavorites: payload,
        errors: {},
      };
    case "ERROR":
      return {
        ...state,
        errors: payload,
      };

    default:
      return { ...state };
  }
}
