import { useEffect, useState } from 'react';

import { getTrending } from 'Api';
import { Loader } from 'components/Loader/Loader';
import MoviesList from 'components/MoviesList/MoviesList';

const Home = () => {
  const [trendMovies, setTrendMovies] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getTrending().then(data => {
      setTrendMovies(data.results);
      setIsLoading(false);
    });
  }, []);

  return (
    <main>
      <h1>Trending today</h1>

      <div>{isLoading ? <Loader /> : <MoviesList films={trendMovies} />}</div>
    </main>
  );
};

export default Home;
