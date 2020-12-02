import { PAGINATION_UPDATE } from "./types";
import axios from "axios";

export const paginationUpdate = (page) => (dispatch) => {
  axios
    .get(`api/pagination_update/${page}`)
    .then((res) =>
      dispatch({
        type: PAGINATION_UPDATE,
        payload: res.data,
      })
    )
    .catch((err) => console.log(err));
};
