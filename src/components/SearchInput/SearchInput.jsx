import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import {
  LabelSearch,
  InputSearch,
  SearchContainer,
} from './SearchInput.styled';
import { selectByFilter} from 'redux/selectors';

const SearchInput = () => {
  const filter = useSelector(selectByFilter);
  const dispatch = useDispatch();

  const onChangeFilter = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <>
      <SearchContainer>
        <LabelSearch>Find contacts by name</LabelSearch>
        <InputSearch
          value={filter}
          type="text"
          name="filter"
          placeholder="enter for search"
          onChange={onChangeFilter}
        ></InputSearch>
      </SearchContainer>
    </>
  );
};

export default SearchInput;
