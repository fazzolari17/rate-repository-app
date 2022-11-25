import MyReviewsContainer from './MyReviewsContainer';
import useGetMyReviews from '../../hooks/useGetMyReviews';
import { useNavigate } from 'react-router-native';
import { DELETE_REVIEW } from '../../graphql/mutations/deleteReview';
import { useMutation } from '@apollo/client';
import { Alert } from 'react-native';

const MyReviews = () => {
  const { myReviews, refetch } = useGetMyReviews();
  const [deleteReview, { data }] = useMutation(DELETE_REVIEW);
  const navigate = useNavigate();

  console.log(myReviews);
  const handleViewRepository = (id) => {
    navigate(`/${id}`);
  };

  const handleDeleteReview = (id) => {
    const onDeleteReview = async (id) => {
      try {
        const { data } = await deleteReview({
          variables: {
            deleteReviewId: id
          },
        });
        navigate('/');
        navigate('/myReviews');
      } catch (error) {
        console.log('ER', error);
      }
    };

    Alert.alert(
      `Delete review`,
      `Are you sure you want to delete this review?`,
      [
        {
          text: 'CANCEL',
          onPress: () => console.log('Cancel'),
          style: 'cancel'
        },
        {
          text: 'DELETE',
          onPress: () => onDeleteReview(id),
          style: 'destructive'
        }
      ]
    );

  };

  if (!myReviews) refetch();

  return <MyReviewsContainer data={myReviews} handleViewRepository={handleViewRepository} handleDeleteReview={handleDeleteReview} />
};

export default MyReviews;