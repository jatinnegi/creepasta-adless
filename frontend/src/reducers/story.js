import { GET_STORY, CLEAR_STORY, LOADING_STORY } from "../actions/types";

const initialState = {
  isLoading: false,
  thumbnail: "",
  content: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case LOADING_STORY:
      return {
        ...state,
        isLoading: true,
      };
    case GET_STORY:
      return {
        isLoading: false,
        thumbnail: payload.thumbnail,
        content: payload.content,
      };
    case CLEAR_STORY:
      return {
        isLoading: false,
        thumbnail: "",
        content: [],
      };

    default:
      return state;
  }
}
