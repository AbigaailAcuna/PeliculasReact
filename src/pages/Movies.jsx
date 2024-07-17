import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import "../css/movies.css";
import { getMovies } from "../data/data";
import { Link } from "react-router-dom"; //para pasar por ruta el id

const Movies = () => {
  const [movies, setMovies] = useState([]); //arreglo de peliculas

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getMovies();
        setMovies(data); //seteando arreglo de películas
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2 className="title">API Pokemón</h2>
      <div className="movies-list">
        {movies.map((movie, index) => (
          <Link key={index} to={`/movie/${movie.id}`}> {/* me lleva a la ruta con el id*/ }
            <MovieCard key={index} type="normalcard" moviedata={movie} /> {/* Le mando las props que recibe el componente */}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Movies;
