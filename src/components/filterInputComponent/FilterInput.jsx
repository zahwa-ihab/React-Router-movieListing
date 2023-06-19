import "./FilterInput.css";
import { GenreTag } from "../genreTagComponent/GenreTag";
export const FilterInput = ({ filters }) => {
  console.log(filters);
  return (
    <div className="filter-container ">
      {filters.map((filter) => (
        <GenreTag key={filter} genreProp={filter} />
      ))}
    </div>
  );
};
