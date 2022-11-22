import { Searchbar } from 'react-native-paper';
import React from 'react';

const SearchBar = ({ searchQuery, setSearchQuery }) => {

  const onChangeSearch = query => setSearchQuery(query);

  const style = {
    margin: 15,
  }

  return (
    <Searchbar
      style={style}
      placeholder='Search'
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
  )
};

export default SearchBar;