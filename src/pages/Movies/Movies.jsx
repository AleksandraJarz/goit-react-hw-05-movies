import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSearchMovies } from 'components/useFilms';
import SearchBar from 'components/SearchBar/SearchBar';
import SearchedMovies from 'components/SearchedMovies/SearchedMovies';
import { Main, Warning } from './MoviesStyled';

const Movies = () => {
  const [resultMovies, setResultMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query') || '';

  const searchQuery = query => {
    const nextParams = query !== '' && { query };
    setSearchParams(nextParams);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const movies = await getSearchMovies(movieName);
        setResultMovies(movies);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [movieName]);

  return (
    <Main>
      <SearchBar value={movieName} onChange={searchQuery} />
      {resultMovies.length === 0 && movieName ? (
        <Warning>Nothing was found, check your typing</Warning>
      ) : (
        <SearchedMovies movies={resultMovies} />
      )}
    </Main>
  );
};
export default Movies;
