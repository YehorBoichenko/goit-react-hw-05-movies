import { NavLink } from 'react-router-dom';
import styles from '../Navigation/Navigation.module.css';

export default function Navigation() {
  return (
    <nav>
      <NavLink
        exact="true"
        to="/"
        className={styles.link}
        activeclassname={styles.activeLink}
      >
        Home
      </NavLink>
      <NavLink to="/movies" className={styles.link}>
        Movies
      </NavLink>
    </nav>
  );
}
