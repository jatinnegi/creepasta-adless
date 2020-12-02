import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getStory } from "../actions/stories";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Story = ({ getStory, story }) => {
  const { title } = useParams();

  useEffect(() => {
    getStory(title);
  }, []);

  return (
    <div className="story-main">
      <h1>{title.replace(/-/g, " ")}</h1>
      <img src={story.thumbnail} alt="" />
      {story.isLoading && <h3>Loading...</h3>}
      {story.content &&
        story.content.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
    </div>
  );
};

Story.propTypes = {
  story: PropTypes.object.isRequired,
  getStory: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  story: state.story,
});

export default connect(mapStateToProps, { getStory })(Story);
