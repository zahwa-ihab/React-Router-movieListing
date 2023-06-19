import "./Home.css";

import { MovieList } from "../movieList/MovieList";
import { useState } from "react";
import { FilterInput } from "../filterInputComponent/FilterInput";
import { Header } from "../headerComponent/Header";

export const Home = ({ moviesArr, setmoviesArr }) => {
  const [newMovie, setnewMovie] = useState("");
  const [filters, setFilters] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  ////UPDATE MOVIES ARRAY AFTER APPLYING FILTERS
  function updateMoviesArray() {
    for (let i = 0; i < moviesArr.length; i++) {
      const movie = moviesArr[i];
      const genres = movie.Genre;
      for (let j = 0; j < genres.length; j++) {
        if (filters.includes(genres[j])) {
          setFilteredMovies([...filteredMovies, movie]);
          console.log("filtered movied number" + i);
          console.log(movie);
        }
      }
    }
    //setmoviesArr(filteredMovies);
  }

  /////END OF UPDATING MOVIES ARRAY
  ////FILTERS
  function handleFilterClick(newFilter) {
    console.log("filterss");
    if (filters.includes(newFilter) === true) {
      return null;
    }
    console.log(newFilter);
    setFilters([...filters, newFilter]);
    updateMoviesArray();
  }
  function clearFilters() {
    setFilters([]);
    setFilteredMovies([]);
  }
  ///END OF HANDLING FILTERS

  ////ADDING MOVIE
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      console.log("key pressed down");
      console.log(newMovie);
      addMovie();
    }
  };
  const addMovie = () => {
    console.log("adding new movie");
    const movie = {
      id: crypto.randomUUID(),
      Title: newMovie,
      Year: "",
      Rating: "",
      Genre: [],
    };
    setmoviesArr([...moviesArr, movie]);
    console.log(moviesArr);
  };
  /////END OF HANDLING ADD MOVIE

  return (
    <>
      <Header />
      <main>
        {filters.length > 0 ? (
          <div className="filter">
            <FilterInput filters={filters} />
            <button className="clear-btn" onClick={clearFilters}>
              Clear
            </button>
          </div>
        ) : (
          <p>nofilters</p>
        )}

        <div className="addmovie-container">
          <input
            className="add-movie-field"
            onKeyDown={handleKeyDown}
            onChange={(event) => setnewMovie(event.target.value)}
            placeholder="Add your fav movie..."
            value={newMovie}
          ></input>
        </div>

        <MovieList filterClick={handleFilterClick} movieArray={moviesArr} />
      </main>
    </>
  );
};
