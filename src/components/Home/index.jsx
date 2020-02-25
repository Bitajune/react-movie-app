import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getMovies } from "../../services/movieService";

const Home = () => {
  const [movies, setMovies] = useState([]);
  async function fetchData() {
    const { results } = await getMovies();
    setMovies(results);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <ul style={{ marginTop: 0 }}>
        {movies.map((m, i) => (
          <li key={i}>
            <Link to={`/movies/${m.id}`}>{m.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
