import { Route, Routes } from 'react-router-dom';
import { Container, Header, Link } from './App.styled';

import Home from 'pages/Home/Home';
import Movies from 'pages/Movies/Movies';
import MovieDetails from 'pages/MovieDetails/MovieDetails';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';

export const App = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/">Home </Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />

        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Routes>
    </Container>
  );
};

// 2898e0b1f9ec30ac14dc576d02fde907

// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YzYxZDJmNTdmYTQzN2ZlYTZjZjVlNjE5MjdjNDU3NyIsInN1YiI6IjY0ZWYzMzY5OTdhNGU2MDExYmFlZGIxZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NDLcNIwvO9Qw-iMwqoc1Z4hWzjnrTXw9usxokrz3-_o

// У цій роботі будуть використовуватися наступні ендпоінти.

// /trending/get-trending список найпопулярніших фільмів на сьогодні для створення колекції на головній сторінці.
// /search/search-movies пошук фільму за ключовим словом на сторінці фільмів.
// /movies/get-movie-details запит повної інформації про фільм для сторінки кінофільму.
// /movies/get-movie-credits запит інформації про акторський склад для сторінки кінофільму.
// /movies/get-movie-reviews запит оглядів для сторінки кінофільму.

// '/' – компонент Home, домашня сторінка зі списком популярних кінофільмів.
// '/movies' – компонент Movies, сторінка пошуку кінофільмів за ключовим словом.
// '/movies/:movieId' – компонент MovieDetails, сторінка з детальною інформацією про кінофільм.
// /movies/:movieId/cast – компонент Cast, інформація про акторський склад. Рендериться на сторінці MovieDetails.
// /movies/:movieId/reviews – компонент Reviews, інформація про огляди. Рендериться на сторінці MovieDetails.
