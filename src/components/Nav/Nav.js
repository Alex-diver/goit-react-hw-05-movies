import { Loader } from 'components/Loader/Loader';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, Link } from './Nav.styled';

export const Nav = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>

        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Header>
    </Container>
  );
};
