import { useState, useEffect } from 'react';
import { getTrendingMovies } from 'components/useFilms';
import TrendingMoviesList from 'components/TrendingList/TrendingList';
import { Wrapper, Header } from './HomeStyled';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const movies = await getTrendingMovies();
        setTrendingMovies(movies);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <Wrapper>
      <Header>Trending today</Header>
      <TrendingMoviesList movies={trendingMovies} />
    </Wrapper>
  );
};
export default Home;
