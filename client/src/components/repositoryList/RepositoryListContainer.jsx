import { FlatList, Pressable, View } from "react-native";
import Item from './Item';
import styles from './styles'
import { useParams, useNavigate } from 'react-router-native';

const ItemSeparator = () => <View style={styles.separator} />;

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