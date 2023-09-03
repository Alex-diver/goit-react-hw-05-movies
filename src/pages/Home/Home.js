import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { getTrending } from 'Api';
import { Loader } from 'components/Loader/Loader';

import { List, NavLink } from './Home.styled';

const Home = () => {
  const [trendMovies, setTrendMovies] = useState([]);
  const location = useLocation();
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
      <List>
        {trendMovies.map(movie => (
          <li key={movie.id}>
            <NavLink to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.original_title ?? movie.name}
            </NavLink>
          </li>
        ))}
        {isLoading && <Loader />}
      </List>
    </main>
  );
};

export default Home;
