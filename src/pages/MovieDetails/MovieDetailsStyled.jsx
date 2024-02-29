import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Main = styled.main`
  -webkit-box-shadow: 0px 7px 10px 0px rgba(124, 126, 134, 0.5);
  -moz-box-shadow: 0px 7px 10px 0px rgba(124, 126, 134, 0.5);
  box-shadow: 0px 7px 10px 0px rgba(124, 126, 134, 0.5);
`;
export const Section = styled.section`
  -webkit-box-shadow: 0px 7px 10px 0px rgba(124, 126, 134, 0.5);
  -moz-box-shadow: 0px 7px 10px 0px rgba(124, 126, 134, 0.5);
  box-shadow: 0px 7px 10px 0px rgba(124, 126, 134, 0.5);
  padding-bottom: 10px;
  padding-left: 15px;
`;
export const MovieWrapper = styled.div`
  display: flex;
  gap: 20px;
`;
export const DescriptionWrapper = styled.div``;
export const Title = styled.h2`
  margin-top: 25px;
  font-size: 30px;
`;
export const Overview = styled.h3`
  font-size: 20px;
`;
export const Genres = styled.h4`
  font-size: 20px;
`;
export const Paragraph = styled.p`
  font-size: 18px;
`;
export const List = styled.ul``;
export const ListItem = styled.li`
  font-size: 18px;
  padding-block: 5px;
`;
export const StyledLink = styled(Link)``;
export const Image = styled.img`
  width: 300px;
  height: 450px;
`;
export const BackButton = styled.button`
  outline: none;
  border: none;
  padding: 10px;
  margin-top: 5px;
  background-color: inherit;
  cursor: pointer;
  font-size: 18px;
  text-align: center;
`;
export const Genre = styled.span``;
