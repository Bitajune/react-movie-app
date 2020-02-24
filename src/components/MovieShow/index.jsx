import React, { Component } from "react";
import { ClipLoader } from "react-spinners";

class MovieShow extends Component {
  state = {
    movie: {},
    loading: true
  };
  async componentDidMount() {
    const movieId = this.props.match.params.id;
    const movie = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`
    );
    const movieJson = await movie.json();
    setTimeout(
      () =>
        this.setState({
          movie: movieJson,
          loading: false
        }),
      500
    );
  }
  render() {
    return (
      <div>
        {this.state.movie.title}
        <br></br>
        <img
          src={`https://image.tmdb.org/t/p/w300${this.state.movie.poster_path}`}
          alt="movie poster"
        />
        <ClipLoader
          size={150}
          size={"20px"}
          color={"#123abc"}
          loading={this.state.loading}
        />
      </div>
    );
  }
}

export default MovieShow;
