import { useLocation } from 'react-router-dom';
import { NavLink, List } from './MoviesList.styled';

const MovieCard = ({ films }) => {
  const location = useLocation();

  return (
    <>
      <List>
        {films.map(movie => {
          return (
            <li key={movie.id}>
              <NavLink to={`/movies/${movie.id}`} state={{ from: location }}>
                <p>{movie.original_title}</p>
              </NavLink>
            </li>
          );
        })}
      </List>
    </>
  );
};

export default MovieCard;
