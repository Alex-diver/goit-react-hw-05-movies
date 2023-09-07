import { useState, useEffect, lazy } from 'react';
import { useSearchParams } from 'react-router-dom';

import { Loader } from 'components/Loader/Loader';

import { searchMovies } from 'Api';

// import { List, NavLink } from 'pages/Home/Home.styled';
import SearchBar from 'components/SearchForm/SearchForm';

const MoviesList = lazy(() => import('components/MoviesList/MoviesList'));

const Movies = () => {
  const [serachResults, setSearchResults] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query') ?? '';
  const [isLoading, setIsLoading] = useState(false);

  const queryUpdate = query => {
    const nextParams = query !== '' && { query };
    setSearchParams(nextParams);
  };

  useEffect(() => {
    const loadResult = async () => {
      try {
        setIsLoading(true);
        const movies = await searchMovies(movieName);
        setSearchResults(movies);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    loadResult();
  }, [movieName]);

  return (
    <div>
      <SearchBar value={movieName} onChenge={queryUpdate} />
      <MoviesList films={serachResults} />
      {isLoading && <Loader />}
    </div>
  );
};
export default Movies;
