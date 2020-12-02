import { GET_STORIES, GET_STORY, CLEAR_STORY, LOADING_STORY } from "./types";
import axios from "axios";

export const getStories = (page) => (dispatch) => {
  axios
    .get(`api/stories/${page}`)
    .then((res) => {
      dispatch({
        type: GET_STORIES,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

// Retrieve a story
export const getStory = (title) => (dispatch) => {
  dispatch({ type: LOADING_STORY });
  axios
    .get(`api/story/${title}`)
    .then((res) => {
      dispatch({
        type: GET_STORY,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

export const clearStory = () => (dispatch) => {
  dispatch({ type: CLEAR_STORY });
};
