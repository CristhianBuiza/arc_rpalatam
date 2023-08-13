import React from "react";
// import PropTypes from "prop-types";
import { useContent } from "fusion:content";
import { useAppContext } from "fusion:context";

const MovieDetail = (props) => {
  const { globalContent } = useAppContext();

  // ! Using custom fields
  // const {
  //   customFields: { nameMovie },
  // } = props;

  // const data = useContent({
  //   source: "movie-find",
  //   query: {
  //     movieTitle: nameMovie,
  //   },
  // });

  return (
    <div>
      <h1>{globalContent?.Title}</h1>
      <h5>Year: {globalContent?.Year}</h5>
      <p>Genero: {globalContent?.Genre}</p>
      <picture>
        <img src={globalContent?.Poster} />
      </picture>
    </div>
  );
};

MovieDetail.label = {
  en: "Movie Detail",
  es: "Los detalles de la pelicula",
};

// ! Using custom fields
// MovieDetail.propTypes = {
//   customFields: PropTypes.shape({
//     nameMovie: PropTypes.string.tag({
//       name: "nombre de la pelicula",
//     }),
//   }),
// };

export default MovieDetail;
