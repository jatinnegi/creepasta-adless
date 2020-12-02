import React, { useEffect, useState } from "react";
import store from "../store";
import Pagination from "./Pagination";
import { connect } from "react-redux";
import { getStories } from "../actions/stories";
import { paginationUpdate } from "../actions/pagination";
import { formatDate } from "../utilities/";
import { useHistory } from "react-router-dom";
import { clearStory } from "../actions/stories";
import PropTypes from "prop-types";

const Index = ({
  getStories,
  stories,
  isLoading,
  paginationUpdate,
  next_page,
  next_to_next_page,
}) => {
  const [page, setPage] = useState(1);
  let history = useHistory();

  useEffect(() => {
    getStories(page);
    paginationUpdate(page);
    store.dispatch(clearStory());
  }, [page]);

  const redirectToStory = (e, title) => {
    e.preventDefault();
    const titleSlug = title.replace(/\s/g, "-");
    const url = `/creepypasta/${titleSlug}`;
    history.push(url);
  };

  return (
    <div className="index">
      <div className="container">
        {stories &&
          stories.map((story, index) => (
            <div
              className="story"
              key={index}
              onClick={(e) => redirectToStory(e, story.title)}
            >
              <a href={story.link}>
                <img
                  src={story.thumbnail}
                  alt=""
                  onClick={(e) => redirectToStory(e, story.title)}
                />
              </a>
              <h2>{story.title}</h2>
              <p>{story.summary}</p>
              <a href={story.link} target="_blank" className="read-now">
                Read Now
              </a>
              <span className="published">
                {formatDate(story.date_published)}
              </span>
            </div>
          ))}
      </div>
      {!isLoading && (
        <Pagination
          page={page}
          setPage={setPage}
          nextPage={next_page}
          nextToNext={next_to_next_page}
        />
      )}
    </div>
  );
};

Index.propTypes = {
  getStories: PropTypes.func.isRequired,
  stories: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  paginationUpdate: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  stories: state.stories.stories,
  isLoading: state.pagination.isLoading,
  next_page: state.pagination.next_page,
  next_to_next_page: state.pagination.next_to_next_page,
});

export default connect(mapStateToProps, { getStories, paginationUpdate })(
  Index
);
