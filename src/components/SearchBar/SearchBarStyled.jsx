import styled from 'styled-components';

export const Searchbar = styled.form`
  padding-top: 15px;
  padding-left: 5px;
`;
export const Input = styled.input`
  padding-left: 10px;
  font-size: 18px;
  border-color: grey;
  border: 1px solid;
  height: 25px;
  width: 350px;
  &:focus {
    outline-color: #2f5ff0;
  }
`;
export const SubmitButton = styled.button`
  height: 29px;
  font-size: 18px;
  cursor: pointer;
  border: 1px solid;
  border-color: grey;
  -webkit-box-shadow: inset 0px 0px 5px 5px rgba(124, 126, 134, 0.5);
  -moz-box-shadow: inset 0px 0px 5px 5px rgba(124, 126, 134, 0.5);
  box-shadow: inset 0px 0px 5px 5px rgba(124, 126, 134, 0.5);
  border-radius: 0px;
`;
