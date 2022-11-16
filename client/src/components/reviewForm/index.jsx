import ReviewFormContainer from './ReviewFormContainer';
import useCreateReview from '../../hooks/useCreateReview';
import { useNavigate } from 'react-router-native';

const ReviewForm = () => {
  const navigate = useNavigate();
  const [addReview] = useCreateReview();

  const createAReview = async (values) => {
    const { repoName, repoOwner, rating, review } = values;

    try {
      const { data } = await addReview({ 
          ownerName: repoOwner,
          repositoryName: repoName,
          text: review,
          rating: rating
      })

      navigate(`/${repoOwner.toLowerCase()}.${repoName.toLowerCase()}`)
    } catch (error) {
      
    }

  };

  return (
    <ReviewFormContainer onSubmit={createAReview} />
  );
};

export default ReviewForm;