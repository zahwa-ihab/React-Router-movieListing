import "./GenreTag.css";

export const GenreTag = ({ genreProp, onfilterClick }) => {
  return (
    <>
      <div className="movie-genre">
        <button onClick={onfilterClick} className="genre-btn">
          {genreProp}
        </button>
      </div>
    </>
  );
};
