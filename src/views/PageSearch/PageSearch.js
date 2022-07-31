import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate, useLocation } from 'react-router-dom';
import * as fetchAPI from '../../API/MoviesApi';
import SearchMovies from '../../components/SearchMovies/SearchMovies';
import MoviesGallery from 'components/MoviesGallery/MoviesGallery';
import styles from '../PageSearch/PageSearch.module.css';

export default function PageSearch() {
  const [movies, setMovies] = useState(null);
  const [query, setQuery] = useState('');
  const history = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (location.search === '') {
      return;
    }
    const newSearch = new URLSearchParams(location.search).get('query');
    setQuery(newSearch);
  }, [history, location]);
  useEffect(() => {
    query && getMovies();
  });
  const getMovies = () => {
    fetchAPI.fetchSearchMovies(query).then(({ results }) => {
      if (results.length === 0) {
        toast.error(`There are no results. Try another ${query}`);
      }
      setMovies(results);
    });
  };
  const onSubmit = query => {
    setQuery(query);
    setMovies([]);
    history.push({ ...location, search: `querry=${query}` });
  };
  return (
    <>
      <SearchMovies onSubmit={onSubmit} className={styles.searchbar} />
      {movies && <MoviesGallery movies={movies} data={movies} />}
    </>
  );
}
