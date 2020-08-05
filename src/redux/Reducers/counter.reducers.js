import { INCREMENT, DECREMENT } from "../Actions/counter.actions";

const initialState = {
  cart: 987,
};

const counterReducers = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        cart: state.cart + 1,
      };
    case DECREMENT:
      return {
        ...state,
        cart: state.cart - 1,
      };
    default:
      return state;
  }
};

export default counterReducers;
