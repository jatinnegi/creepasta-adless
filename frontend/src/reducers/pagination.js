import { PAGINATION_UPDATE } from "../actions/types";

const initialState = {
  next_page: true,
  next_to_next_page: true,
  isLoading: true,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case PAGINATION_UPDATE:
      return {
        ...state,
        next_page: payload.next_page,
        next_to_next_page: payload.next_to_next_page,
        isLoading: false,
      };

    default:
      return state;
  }
}
