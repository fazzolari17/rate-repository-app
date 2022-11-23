import { FlatList } from 'react-native';
import ItemSeparator from '../repositoryList/ItemSeparator';
import ReviewItem from '../repositoryList/singleRepository/ReviewItem';

const MyReviewsContainer = ({ data }) => {

  const reviewNodes = data
    ? data.reviews.edges.map(edge => edge.node)
    : [];

  const renderItem = ({ item }) => <ReviewItem review={item} />;

  return (
    <FlatList
      data={reviewNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={renderItem}
    />
  )
};

export default MyReviewsContainer;