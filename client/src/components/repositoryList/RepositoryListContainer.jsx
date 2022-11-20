import React from 'react';
import { FlatList, Pressable } from 'react-native';
import Item from './Item';
import ItemSeparator from './ItemSeparator';
import RepositoryListMenu from './RepositoryListMenu';
import { useParams, useNavigate } from 'react-router-native';




const RepositoryListContainer = ({ repositories, listOrder, setListOrder }) => {
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

  return (
    <FlatList
      ListHeaderComponent={<RepositoryListMenu listOrder={listOrder} setListOrder={setListOrder} />}
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={renderItem}
    />
  );
};

export default RepositoryListContainer;