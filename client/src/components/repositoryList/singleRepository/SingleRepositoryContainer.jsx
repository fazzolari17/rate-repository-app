import { FlatList } from 'react-native';
import RepositoryInfo from './RepositoryInfo';
import ItemSeparator from '../ItemSeparator';
import ReviewItem from './ReviewItem';


const SingleRepositoryContainer = ({ repository, onClick }) => {
  const show = true;
  
     const reviewNodes = repository.reviews
    ? repository.reviews.edges.map(edge => edge.node)
    : []; 
  
  const renderItem = ({ item }) => <ReviewItem review={item} />;

  return (
     <FlatList
        data={reviewNodes}
        renderItem={renderItem}
        keyExtractor={({ id }) => id}
        ListHeaderComponent={() => <RepositoryInfo data={{ repository, show }} onClick={onClick} />}
        ItemSeparatorComponent={ItemSeparator}
      >
      </FlatList>
  )
};

export default SingleRepositoryContainer;