import React from 'react';
import styles from '../MoviesGallery/MoviesGallery.module.css';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function MoviesGalleryItem({ movie }) {
  const location = useLocation();
  return (
    <li className={styles.MoviesGalleryItem}>
      <Link
        className={styles.GalleryItemMovies}
        to={{
          pathName: `movies/${movie.id}`,
          state: { from: location },
          label: 'Back to Movies',
        }}
      >
        <img
          src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
          alt={movie.original_title}
          width="300"
          className={styles.image}
        />
        <div className={styles.titleTumb}>
          <span className={styles.movieTitle}>{movie.title}</span>
        </div>
      </Link>
    </li>
  );
}

MoviesGalleryItem.propTypes = {
  movie: PropTypes.object.isRequired,
};
