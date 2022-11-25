import { useMutation } from '@apollo/client';
import { useEffect } from 'react';
import { DELETE_REVIEW } from '../graphql/mutations/deleteReview';
import { GET_MY_REVIEWS } from '../graphql/queries/getMyReviews';

const useDeleteReview = () => {
  const [deleteReview, { data, loading, error, refetch }] = useMutation(DELETE_REVIEW);

  const removeReview = async (id) => {
    try {
      const data = await deleteReview({
        variables: {
          deleteReviewId: id
        }
      });
    } catch (error) {
      console.log(error);
    }
    useEffect(() => {
      refetch()
    }, [data])

    return { deleteReview: removeReview, data, refetch };
  }
};

export default useDeleteReview;
