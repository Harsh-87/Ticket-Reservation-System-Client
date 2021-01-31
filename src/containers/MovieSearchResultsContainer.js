import React from "react";
import MovieElementComponent from "../components/movie/MovieElementComponent";
import store from "../store";
import "../assets/styles/Movie.css";
import { useHistory } from "react-router-dom";

function MovieSearchResultContainer() {
  const state = store.getState();
  const movies = state.movieData.movies;
  const history = useHistory();
  return (
    <div className="container">
      {movies.map((movie) => (
        <MovieElementComponent
          key={movie._id}
          movie={movie}
          history={history}
        />
      ))}
    </div>
  );
}

export default MovieSearchResultContainer;
