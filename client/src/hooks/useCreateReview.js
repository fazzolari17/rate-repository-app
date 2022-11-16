import { useMutation } from '@apollo/client';
import { CREATE_REVIEW } from '../graphql/mutations/createReview';

const useCreateReview = () => {
  const [createReview, result] = useMutation(CREATE_REVIEW);

  const addReview = async ({ ownerName, repositoryName, text, rating }) => {
    try {
      const { data } = await createReview({
        fetchPolicy: 'network-only',
        variables: {
          review: {
            ownerName,
            repositoryName,
            text,
            rating: parseInt(rating)
          }
        }
      });
      return data;
    } catch (error) {
      console.log(error)
    }
  };

  return [addReview, result];

};

export default useCreateReview;