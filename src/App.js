import "./App.css";
//import { Header } from "./components/headerComponent/Header";
import movies from "./data/data.json";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Movie } from "./components/movieComponent/movie";
import { Home } from "./components/homeComponent/Home";
function App() {
  const [moviesArr, setmoviesArr] = useState(movies);

  function gettMovieById(id) {
    console.log("in getmovie()");
    const m = moviesArr.find((movieObj) => movieObj.id === id);
    console.log(m);
    return m;
  }
  //<AddMovie onAddClick={onAddMovie} />
  //console.log(moviesArr);
  return (
    <>
      <Routes>
        <Route path="/movie/:id" element={<Movie movie={gettMovieById} />} />
        <Route
          path="/"
          element={<Home moviesArr={moviesArr} setmoviesArr={setmoviesArr} />}
        />
      </Routes>
    </>
  );
}

export default App;
