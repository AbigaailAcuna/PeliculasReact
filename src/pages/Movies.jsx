import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import "../css/movies.css";
import {getMovies} from "../data/data";

const Movies = () => {

    const[movies, setMovies] = useState([]);//arreglo de peliculas

    useEffect(() => {
        const fetchData = async () => {
          try {
            const data = await getMovies();
            setMovies(data); //seteando arreglo de películas
            console.log(data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []);

  return (
    <div>
      <h2 className="title">Películas</h2>
      <div className="movies-list">
        {movies.map((movie, index) => (
          <MovieCard
            key={index}
            type="normalcard"
            moviedata={movie}
          />
        ))}
      </div>
    </div>
  );
};

export default Movies;
