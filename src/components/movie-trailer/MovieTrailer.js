import React, { useMemo } from "react";
import MovieTrailerDetails from "../trailer-details/MovieTrailerDetails";
import "./MovieTrailer.css";

const MovieTrailer = (props) => {
  /**
   * This method converts youtube link into embed link and concats autoplay query param
   */
  const getEmbbedUrl = useMemo(
    () =>
      props["movie"]
        ? `https://www.youtube.com/embed/${
            props["movie"]["TrailerURL"].split("v=")[1]
          }?autoplay=1`
        : "",
    [props]
  );

  return (
    <div className="trailer-container" id="movie-youtube-trailer">
      <iframe
        title={props["EventTitle"]}
        className="__youtube-video"
        src={getEmbbedUrl}
      />
      <MovieTrailerDetails {...props} />
    </div>
  );
};

export default MovieTrailer;
