import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", width: "200px" }}>
      <img
        src={movie.Poster}
        alt={movie.Title}
        style={{ width: "100%", height: "300px" }}
      />
      <h3>{movie.Title}</h3>
      <p>{movie.Year}</p>
    </div>
  );
};

export default MovieCard;
