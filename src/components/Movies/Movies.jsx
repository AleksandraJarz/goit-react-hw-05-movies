import { useRef } from 'react';
import { useNavigate, useSearchParams, useLocation } from 'react-router-dom';
import useFilms from 'components/useFilms';
import {
  FilmLink,
  MoviesFormInput,
  MoviesForm,
  MoviesSearchButton,
} from './MoviesStyled';

export default function Movies() {
  const inputRef = useRef();
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');
  const { filmData } = useFilms(
    `search/movie?query=${query}&include_adult=false&`
  );

  const films = filmData.results;

  const handleSubmit = evt => {
    const form = evt.currentTarget;
    evt.preventDefault();
    navigate(`?query=${inputRef.current.value}`);
    form.reset();
  };

  return (
    <div>
      <MoviesForm onSubmit={handleSubmit}>
        <MoviesFormInput
          type="text"
          placeholder="Search movies"
          ref={inputRef}
        ></MoviesFormInput>
        <MoviesSearchButton type="submit">Search</MoviesSearchButton>
      </MoviesForm>
      {films?.map(
        film =>
          query && (
            <p key={film.id}>
              <FilmLink to={`${film.id}`} state={{ from: location }}>
                {film.title}
              </FilmLink>
            </p>
          )
      )}
    </div>
  );
}
