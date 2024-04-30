import axios from 'axios';
import { useEffect, useState } from 'react';

const apiKey = 'api_key=39ffc17877ae637e34c517b3cb306e6a';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const useFilms = query => {
  const [filmData, setFilmList] = useState([]);
  const [isLoading, setIsLoading] = useState([false]);
  const [error, setError] = useState([false]);

  useEffect(() => {
    const getFilms = async () => {
      setIsLoading(true);
      const { data } = await axios.get(`${query}${apiKey}`);
      setFilmList(data);
      setIsLoading(false);
    };
    getFilms().catch(error => {
      setError(true);
      setIsLoading(false);
    });
  }, [query]);

  return { filmData, isLoading, error };
};

export default useFilms;
