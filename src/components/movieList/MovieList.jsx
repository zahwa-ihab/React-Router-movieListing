import "./MovieList.css";
import { MovieCard } from "../movieCard/MovieCard";

export function MovieList({ movieArray, filterClick }) {
  return (
    <>
      {movieArray.map((movie) => (
        <MovieCard
          onfilterClick={filterClick}
          key={movie.id}
          keyProp={movie.id}
          movieProp={movie}
        />
      ))}
    </>
  );
}
