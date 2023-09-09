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
  ListH2,
  ListH3,
  ListP,
  ListH4,
  ListLi,
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
          <ListH2>{original_title}</ListH2>
          <ListH3>User score: {scoreToFixed}%</ListH3>
          <ListH3>Overview</ListH3>
          <ListP>{overview} </ListP>
          <ListH3>Genres</ListH3>
          <GenresList>
            {genres &&
              genres.length &&
              genres.map(({ id, name }) => <li key={id}>{name}</li>)}
          </GenresList>
        </InfoContainer>
      </MovieContainer>
      <InfoBox>
        <ListH4>Additional information</ListH4>
        <ul>
          <ListLi>
            <Link to="cast" state={{ ...location.state }}>
              Cast
            </Link>
          </ListLi>
          <ListLi>
            <Link to="reviews" state={{ ...location.state }}>
              Reviews
            </Link>
          </ListLi>
        </ul>
      </InfoBox>
      <Outlet />
    </main>
  );
};

export default MovieDetails;
