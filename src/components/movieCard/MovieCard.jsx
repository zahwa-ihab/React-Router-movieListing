import "./MovieCard.css";
import { GenreTag } from "../genreTagComponent/GenreTag";
import { Link } from "react-router-dom";

export const MovieCard = ({ movieProp, keyProp, onfilterClick }) => {
  return (
    <div className="movie-card">
      <Link to={`/movie/${movieProp.id}`}>
        <div className="movie-details">
          <div className="movie-name">
            <button className="title-btn"> {movieProp.Title}</button>
          </div>

          <div className="movie-year">
            <p>Made in year {movieProp.Year}</p>
          </div>
          <div className="movie-rate">
            <button className="rating-btn">Rating {movieProp.Rating}</button>
          </div>
        </div>
      </Link>
      <div className="genres-container">
        {movieProp.Genre.map((genre) => (
          <GenreTag
            onfilterClick={() => onfilterClick(genre)}
            key={genre}
            genreProp={genre}
          />
        ))}
      </div>
    </div>
  );
};
