import React from 'react';
import { FlatList, Pressable, View } from 'react-native';
import Item from './Item';
import ItemSeparator from './ItemSeparator';
import RepositoryListMenu from './RepositoryListMenu';
import { useParams, useNavigate } from 'react-router-native';
import SearchBar from './searchBar/SearchBar';


const RepositoryListContainer = ({ repositories, listOrder, setListOrder, searchQuery, setSearchQuery, onEndReach }) => {
  const param = useParams()
  const navigate = useNavigate();
  

  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : []; 
  
  
  const showPage = (item) => { 
    navigate(`/${item.id}`)
  };

  const renderItem = ({ item }) => (
    <Pressable onPress={() => showPage(item)}>
      <Item data={{ item }} />
    </Pressable>
  );

  const header =
    <View style={{ backgroundColor: '#767676' }}>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <RepositoryListMenu listOrder={listOrder} setListOrder={setListOrder} />
    </View>;

  return (
    <FlatList
      ListHeaderComponent={header}
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={renderItem}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.25}
    />
  );
};

export default RepositoryListContainer;