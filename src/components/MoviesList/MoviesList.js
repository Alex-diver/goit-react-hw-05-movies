import { useLocation } from 'react-router-dom';

const MoviesList = ({ films }) => {
  const location = useLocation();
  const imgURL = `https://image.tmdb.org/t/p/w500`;

  return (
    <>
      <list>
        {films.map(movie => {
          return (
            <item key={movie.id}>
              <link to={`/movie/${movie.id}`} state={{ from: location }}>
                <img
                  src={imgURL + movie.poster_path}
                  width={140}
                  alt={movie.original_title}
                />
                <title>{movie.original_title}</title>
              </link>
            </item>
          );
        })}
      </list>
    </>
  );
};
export default MoviesList;
