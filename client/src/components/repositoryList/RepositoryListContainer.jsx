import { FlatList, Pressable } from "react-native";
import Item from './Item';
import ItemSeparator from './ItemSeparator';
import { useParams, useNavigate } from 'react-router-native';



const RepositoryListContainer = ({ repositories }) => {
  const param = useParams()
  const navigate = useNavigate();
  

  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : []; 
  
  
  const showPage = (item) => { 
    console.log(item.id)
    navigate(`/${item.id}`)
  };

  const renderItem = ({ item }) => (
    <Pressable onPress={() => showPage(item)}>
      <Item data={{ item }} />
    </Pressable>
  );

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={renderItem}
    />
  );
};

export default RepositoryListContainer;