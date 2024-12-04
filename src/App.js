import React, { useState, useEffect } from "react";
import axios from "axios";
import Hero from "../src/components/Hero";
import SearchBar from "../src/components/SearchBar";
import MovieList from "../src/components/MovieList";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          `http://www.omdbapi.com/?apikey=aeb36c3&s=${searchTerm}`
        );
        setMovies(response.data.Search || []); // Update movies array
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, [searchTerm]);

  return (
    <header classname = "App-header">
    <div>
      {/* Hero Section */}
      <Hero />

      {/* Search Bar to update searchTerm */}
      <SearchBar setSearchTerm={setSearchTerm} />

      {/* Display Movies List */}
      <MovieList movies={movies} />
    </div>
    </header>
  );
};

export default App;
