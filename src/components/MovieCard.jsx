import React, { useEffect } from "react";
import "../css/moviescard.css";

const MovieCard = ({ type, moviedata }) => {
  return (
    <div className={`movie-card ${type}`}>
      <img src={moviedata.image} alt={moviedata.name} className="movie-img" />
      <div className="movie-name">{moviedata.name}</div>
    </div>
  );
};

export default MovieCard;
