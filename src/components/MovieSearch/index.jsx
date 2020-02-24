import React, { Component } from "react";
import { BeatLoader } from "react-spinners";
import { Link } from "react-router-dom";

class MovieSearch extends Component {
  state = {
    search: "",
    movies: [],
    loading: false
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = async e => {
    e.preventDefault();
    this.setState({
      loading: true
    });
    const { search } = this.state;
    try {
      const movie = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&query=${search}&page=1&include_adult=false`
      );
      const movieJson = await movie.json();
      setTimeout(
        () =>
          this.setState({
            movies: movieJson.results || [],
            search: "",
            loading: false
          }),
        500
      );
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const isValid = this.state.search === "";
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="movie title"
            name="search"
            value={this.state.search}
            onChange={this.handleChange}
          />
          <button type="submit" disabled={isValid || this.state.loading}>
            {this.state.loading ? (
              <BeatLoader size={5} color={"#123abc"} loading={true} />
            ) : (
              "Search"
            )}
          </button>
        </form>
        {this.state.movies.map((m, i) => (
          <div>
            <Link to={`/movies/${m.id}`} key={i}>
              {m.title}
              <br></br>
            </Link>
            <img
              src={`https://image.tmdb.org/t/p/original${m.poster_path}`}
              alt="movie poster"
              height="500px"
            />
          </div>
        ))}
      </div>
    );
  }
}

export default MovieSearch;
