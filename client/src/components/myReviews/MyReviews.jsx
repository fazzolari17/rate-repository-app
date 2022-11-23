import MyReviewsContainer from './MyReviewsContainer';
import useGetMyReviews from '../../hooks/useGetMyReviews';

const MyReviews = () => {
  const { myReviews, refetch } = useGetMyReviews();

  if (!myReviews) refetch();

  return <MyReviewsContainer data={myReviews} />
};

export default MyReviews;