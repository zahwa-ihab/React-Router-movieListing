import "./movie.css";
import { useParams } from "react-router-dom";
import { Header } from "../headerComponent/Header";

export const Movie = ({ movie }) => {
  const params = useParams();
  console.log(params.id);
  const movieToShow = movie(params.id);
  console.log("movie");
  console.log(movieToShow);

  return (
    <>
      <Header />
      <main>
        <h1>This is {movieToShow.Title} movie</h1>
      </main>
    </>
  );
};
