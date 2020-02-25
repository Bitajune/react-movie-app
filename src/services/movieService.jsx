export async function getMovies() {
  const endpoint = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`;
  const movies = await fetch(endpoint, { mode: "cors" });
  return await movies.json();
}
export async function getMovieById(movieId) {
  const endpoint = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`;
  const movie = await fetch(endpoint, { mode: "cors" });
  return await movie.json();
}
