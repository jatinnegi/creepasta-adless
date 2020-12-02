import { combineReducers } from "redux";
import stories from "./stories";
import story from "./story";
import pagination from "./pagination";

export default combineReducers({ stories, story, pagination });
