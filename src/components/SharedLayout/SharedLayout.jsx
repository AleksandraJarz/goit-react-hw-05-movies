import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import {
  Container,
  Header,
  Navigation,
  NavigationItem,
} from './SharedLayoutStyled';
const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <Navigation>
          <NavigationItem to="/">Home</NavigationItem>
          <NavigationItem to="/movies">Movies</NavigationItem>
        </Navigation>
      </Header>
      <Suspense fallback={<div> Loading...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default SharedLayout;
