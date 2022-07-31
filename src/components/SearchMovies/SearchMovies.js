import { useState } from 'react';
import styles from '../SearchMovies/SearchMovies.module.css';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

export default function SearchMovies({ onSubmit }) {
  const [query, setQuery] = useState('');
  const handleChanger = event => {
    setQuery(event.currentTarget.value.toLowerCase());
  };
  const handleSubmit = event => {
    event.preventDefault();
    if (query.trim() === '') {
      toast.error('Please enter search query');
      return;
    }
    onSubmit(query);
    setQuery('');
  };

  return (
    <header className={styles.searchbar}>
      <form onSubmit={handleSubmit} className={styles.searchform}>
        <button type="submit" className={styles.searchFormButton}>
          <span className={styles.searchFormButtonLabel}>Search</span>
        </button>
        <input
          type="text"
          placeholder="Search movies"
          onChange={handleChanger}
          value={query}
          className={styles.searchFormInput}
        />
      </form>
    </header>
  );
}

SearchMovies.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
