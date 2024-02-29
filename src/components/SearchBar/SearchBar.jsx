import { Searchbar, Input, SubmitButton } from './SearchBarStyled';
import propTypes from 'prop-types';

const SearchBar = ({ search, onChange }) => {
  const handleSubmit = evt => {
    evt.preventDefault();
  };

  return (
    <>
      <Searchbar onSubmit={handleSubmit}>
        <Input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={search}
          onChange={evt => onChange(evt.target.value)}
        />
        <SubmitButton type="submit">Search</SubmitButton>
      </Searchbar>
    </>
  );
};

SearchBar.propTypes = {
  search: propTypes.string,
  onChange: propTypes.func,
};

export default SearchBar;
