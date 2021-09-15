import { ADD, MINUS, SONGLIST } from "../constants/counter";

const INITIAL_STATE = {
  num: 0,
  playlist: [],
};

export default function counter(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        num: state.num + 1,
      };
    case MINUS:
      return {
        ...state,
        num: state.num - 1,
      };
    case SONGLIST:
      return {
        playlist: state.playlist,
      };
    default:
      return state;
  }
}
