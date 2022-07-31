import { useState, useEffect } from 'react';
import { Routes } from 'react-router';
import {
  Route,
  Link,
  useParams,
  useNavigate,
  useLocation,
  useMatch,
} from 'react-router-dom';
import MovieDetails from 'components/MovieDetails/MovieDetails';
import Cast from 'components/Cast/Cast';
import Reviews from 'components/Reviews/Reviews';
import * as fetchAPI from '../../API/MoviesApi';
import styles from '../Page/MoviePage.module.css';

export default function MoviePage() {
  const history = useNavigate();
  const location = useLocation();
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const { url } = useMatch();
  useEffect(() => {
    fetchAPI.fetchMoviesId(movieId).then(setMovie);
  }, [movieId]);
  const goBack = () => {
    history.push({
      pathname: location.state?.backUrl || '/',
      search: location.state?.searchValue || '',
    });
  };
  return (
    <>
      <button type="submit" onClick={goBack} className={styles.button}>
        Go back
      </button>
      {movie && (
        <>
          <div className={styles.wrapper}>
            <MovieDetails movie={movie} />
            <h4 className={styles.addTitle}>Additional information:</h4>
            <Link
              to={{
                pathname: `${url}/cast`,
                state: {
                  backUrl: `${location.state?.searchValue ? `/movies` : `/`}`,
                  searchValue: location.state?.searchValue || '',
                },
              }}
              className={styles.link}
            >
              Reviews
            </Link>
          </div>
          <Routes>
            <Route
              path={`${url}/cast`}
              element={<Cast movieId={movieId} />}
            ></Route>
            <Route
              path={`${url}/reviews`}
              element={<Reviews movieId={movieId} />}
            ></Route>
          </Routes>
        </>
      )}
    </>
  );
}
