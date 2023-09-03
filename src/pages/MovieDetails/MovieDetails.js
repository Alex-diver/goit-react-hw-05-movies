import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { HiArrowNarrowLeft } from 'react-icons/hi';

import { getMovieDetails } from 'Api';
import {
  Btn,
  LinkBtn,
  MovieContainer,
  InfoContainer,
  GenresList,
  InfoBox,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const [movieDetail, setMovieDetail] = useState({});
  const location = useLocation();
  const { movieId } = useParams();

  useEffect(() => {
    getMovieDetails(movieId).then(data => setMovieDetail(data));
  }, [movieId]);

  const { original_title, overview, genres, poster_path, vote_average } =
    movieDetail;
  const score = vote_average * 10;
  const scoreToFixed = score.toFixed(2);
  return (
    <main>
      <Btn type="button">
        <LinkBtn to={location.state?.from ?? '/'}>
          <HiArrowNarrowLeft size={24} />
          Go back
        </LinkBtn>
      </Btn>
      <MovieContainer>
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          width={220}
          height={280}
          loading="lazy"
          alt="poster"
        />
        <InfoContainer>
          <h2>{original_title}</h2>
          <h3>User score: {scoreToFixed}%</h3>
          <h3>Overview</h3>
          <p>{overview} </p>
          <h3>Genres</h3>
          <GenresList>
            {genres &&
              genres.length &&
              genres.map(({ id, name }) => <li key={id}>{name}</li>)}
          </GenresList>
        </InfoContainer>
      </MovieContainer>
      <InfoBox>
        <h4>Additional information</h4>
        <ul>
          <li>
            <Link to="cast" state={{ ...location.state }}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" state={{ ...location.state }}>
              Reviews
            </Link>
          </li>
        </ul>
      </InfoBox>
      <Outlet />
    </main>
  );
};

export default MovieDetails;
