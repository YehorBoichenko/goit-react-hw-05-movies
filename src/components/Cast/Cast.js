import { useState, useEffect } from 'react';
import * as fetchAPI from '../../API/MoviesApi';
import styles from '../Cast/Cast.module.css';
import PropTypes from 'prop-types';

import photo from '../../images/NotFound.png';
export default function Cast({ movieId }) {
  const [{ cast }, setCast] = useState([]);
  useEffect(() => {
    fetchAPI.fetchCast(movieId).then(setCast);
  }, [movieId]);
  return (
    <ul className={styles.cast}>
      {cast && cast.length > 0 ? (
        cast.map(({ id, profile_path, name, character }) => (
          <li key={id} className={styles.item}>
            <img
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w300${profile_path}`
                  : photo
              }
              alt={name}
              className={styles.photo}
            />
            <p className={styles.name}>{name}</p>
            <p className={styles.character}>{character}</p>
          </li>
        ))
      ) : (
        <b>Nothing was found!</b>
      )}
    </ul>
  );
}

Cast.propTypes = {
  movieId: PropTypes.object.isRequired,
};
