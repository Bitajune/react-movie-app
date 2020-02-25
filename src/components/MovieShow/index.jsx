import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getMovieById } from "../../services/movieService";
import { ClipLoader } from "react-spinners";

const MovieShow = props => {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);
  async function fetchData() {
    const movieId = props.match.params.id;
    const movie = await getMovieById(movieId);

    setTimeout(() => {
      setLoading(false);
      setMovie(movie);
    }, 500);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <ClipLoader
        size={150}
        size={"20px"}
        color={"#123abc"}
        loading={loading}
      />
      {movie.title}
      <br></br>
      <img
        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
        alt="movie poster"
      />
    </div>
  );
};

export default MovieShow;
