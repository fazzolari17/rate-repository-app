import ReviewItem from './ReviewItem';
import { useParams } from 'react-router-native';
import useGetRepository from '../../../hooks/useGetRepository';
import { FlatList } from 'react-native';
import RepositoryInfo from './RepositoryInfo';
import ItemSeparator from '../ItemSeparator';

const SingleRepository = () => {
  const id = useParams().id;
  const show = true;
  const { repository, loading, refetch } = useGetRepository({ id });

  if (!repository) {
    refetch();
  } else if (repository) {
    const reviews = repository.reviews;

     const reviewNodes = reviews
    ? reviews.edges.map(edge => edge.node)
    : []; 
    
    const renderItem = ({ item }) => <ReviewItem review={item} />;

    return (
      <FlatList
        data={reviewNodes}
        renderItem={renderItem}
        keyExtractor={({ id }) => id}
        ListHeaderComponent={() => <RepositoryInfo data={{ repository, show }} />}
        ItemSeparatorComponent={ItemSeparator}
      >
      </FlatList>


    );
  };
};

export default SingleRepository;