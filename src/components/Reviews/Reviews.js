import { useState, useEffect } from 'react';
import * as fetchAPI from '../../API/MoviesApi';
import styles from '../Reviews/Reviews.module.css';
import Proptypes from 'prop-types';

export default function Reviews({ movieId }) {
  const [{ results }, setReviews] = useState([]);

  useEffect(() => {
    fetchAPI.fetchMoviesByReviews(movieId).then(setReviews);
  }, [movieId]);

  return (
    <>
      <ul>
        {results && results.length > 0 ? (
          results.map(result => (
            <li key={result.id} className={styles.ReviewCard}>
              <div className={styles.imageSection}>
                <b>{result.author}:</b>
                <p>{result.content}</p>
              </div>
            </li>
          ))
        ) : (
          <b>No reviews yet!</b>
        )}
      </ul>
    </>
  );
}

Reviews.propTypes = {
  movieId: Proptypes.object.isRequired,
};
