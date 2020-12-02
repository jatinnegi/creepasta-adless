import { GET_STORIES } from "../actions/types";

const initialState = {
  stories: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_STORIES:
      return {
        ...state,
        stories: payload,
      };

    default:
      return state;
  }
}
