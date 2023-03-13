import React from 'react'
import ReactStars from "react-stars";
import "./MovieCard.css";

const MovieCard = ({movie}) => {
  
  return (
    <div className="card-container">
      <h1> {movie.title} </h1>
      <img src={movie.poster} alt={movie.title} />
      <h5>{movie.description}</h5>
      <ReactStars
        count={5}
        edit={false}
        half={false}
        value={movie.raiting}
        size={24}
        color2={"#ffd700"}
      />
      ,
    </div>
  );
}

export default MovieCard