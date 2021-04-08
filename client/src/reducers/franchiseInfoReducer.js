import {
  FETCH_ALL_FRANCHISE,
  FETCH_TOP_FRANCHISES,
  FETCH_FRANCHISE_BY_CATEGORY,
  REDIRECT,
  FETCH_FRANCHISE_BY_NAME,
  CLEAR_STATE
} from "../actions/type";

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_ALL_FRANCHISE:
      // console.log("in FETCH_ALL_FRANCHISE");
      return action.payload;
    case FETCH_TOP_FRANCHISES:
      // console.log("in FETCH_top_FRANCHISE");
      return action.payload;
    case FETCH_FRANCHISE_BY_CATEGORY:
      // console.log("in FETCH_FRANCHISE_BY_CATEGORY", action.payload);
      return action.payload;
    case FETCH_FRANCHISE_BY_NAME:
      // console.log('in fetch-franchise-by-name', action.payload);
      return action.payload;
    case REDIRECT:
      // console.log("in redirect reducer", action.payload);
      return action.payload;
    case CLEAR_STATE:
      // console.log('in clear state');
      return {};
    default:
      return state;
  }
}
