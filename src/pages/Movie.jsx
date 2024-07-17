import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovie } from "../data/data";
import "../css/movie.css";

const Movie = () => {
  // Usar useParams para acceder al parámetro movieid de la URL
  let { movieid } = useParams(); //el parámetro por ruta

  const [movie, setMovie] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getMovie(movieid);
        if (data) {
          setMovie(data); //seteando arreglo de películas
          // console.log("individual " + data);
        } else {
          console.log("Movie not found:(");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [movieid]);

  return (
    <div>
      <h1 className="text"> Nombre del Pokemón : {movie.name}</h1>
      <img src={movie.image} alt="imagen"></img>
    </div>
  );
};

export default Movie;
