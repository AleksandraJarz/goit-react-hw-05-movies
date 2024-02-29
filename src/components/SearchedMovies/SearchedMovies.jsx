import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

import { MovieList, MovieLink, MovieItem } from './SearchedMoviesStyled';

const SearchedMovies = ({ movies }) => {
  const location = useLocation();
  return (
    <MovieList>
      {movies.map(movie => (
        <MovieItem key={movie.id}>
          <MovieLink to={`/movies/${movie.id}`} state={{ from: location }}>
            {movie.title}
          </MovieLink>
        </MovieItem>
      ))}
    </MovieList>
  );
};
SearchedMovies.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
export default SearchedMovies;
