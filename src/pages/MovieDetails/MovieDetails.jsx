import React, { useState, useEffect, useRef, Suspense } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { getMovieDetails } from 'components/useFilms';

import {
  BackButton,
  Main,
  Section,
  Title,
  Overview,
  Genres,
  Paragraph,
  List,
  ListItem,
  StyledLink,
  Image,
  DescriptionWrapper,
  MovieWrapper,
  Genre,
} from './MovieDetailsStyled';

const MovieDetails = () => {
  const [details, setDetails] = useState();
  const { movieId } = useParams();
  const location = useLocation();
  const goBackLocation = useRef(location.state?.from || '/');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const movieDetails = await getMovieDetails(movieId);
        setDetails(movieDetails);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [movieId]);

  const realaseYear = details.release_date.slice(0, 4);
  return (
    <>
      <Main>
        <Link to={goBackLocation.current}>
          <BackButton> Go back</BackButton>
        </Link>
        <MovieWrapper>
          <Image
            src={`https://image.tmdb.org/t/p/w500${details.poster_path}`}
            alt={details.title}
          />
          <DescriptionWrapper>
            <Title>
              {details.title}
              {`(`}
              {realaseYear}
              {`)`}
            </Title>
            <Paragraph>User Score: {details.vote_average}</Paragraph>
            <Overview>Overview </Overview>
            <Paragraph>{details.overview}</Paragraph>
            <Genres>Genres</Genres>
            <Paragraph>
              {details.genres.map(genre => (
                <Genre key={genre.id}> {genre.name}</Genre>
              ))}
            </Paragraph>
          </DescriptionWrapper>
        </MovieWrapper>
      </Main>
      <Section>
        <Paragraph>Additional info</Paragraph>
        <List>
          <ListItem>
            <StyledLink to="cast">Cast</StyledLink>
          </ListItem>
          <ListItem>
            <StyledLink to="reviews">Reviews</StyledLink>
          </ListItem>
        </List>
      </Section>
      <Section>
        <Suspense fallback={<div> Loading...</div>}>
          <Outlet />
        </Suspense>
      </Section>
    </>
  );
};
export default MovieDetails;
