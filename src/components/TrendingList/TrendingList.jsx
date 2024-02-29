import PropTypes from 'prop-types';
import { List, ListItem, StyledLink } from './TrendingListStyled';

const TrendingMoviesList = ({ movies }) => {
  return (
    <List>
      {movies.map(movie => (
        <ListItem key={movie.id}>
          <StyledLink to={`/movies/${movie.id}`}>{movie.title}</StyledLink>
        </ListItem>
      ))}
    </List>
  );
};

TrendingMoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
export default TrendingMoviesList;
