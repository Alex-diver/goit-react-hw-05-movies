import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieCredits } from 'Api';
import { ActorName, CastItem, CastList, Character } from './Cast.styled';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    getMovieCredits(movieId).then(data => setCast(data.cast));
  }, [movieId]);

  return (
    <CastList>
      {cast.map(({ id, name, profile_path, character }) => (
        <CastItem key={id}>
          <img
            src={
              profile_path
                ? `https://image.tmdb.org/t/p/w500${profile_path}`
                : `https://placehold.jp/24/cccccc/ffffff/140x210.png?text=There is no photo`
            }
            width={140}
            loading="lazy"
            alt="actor"
          />
          <ActorName>{name}</ActorName>
          <Character>Character:{character}</Character>
        </CastItem>
      ))}
    </CastList>
  );
};

export default Cast;
