import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_MY_REVIEWS } from '../graphql/queries/getMyReviews';

const getMyReviews = () => {
  const [myReviews, setMyReviews] = useState();
  const { data, error, refetch } = useQuery(GET_MY_REVIEWS, {
    fetchPolicy: 'cache-and-network'
  });

  const fetchMyReviews = async () => {
    try {
      setMyReviews(data.me);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    refetch()
  }, []);

  return { myReviews, refetch: fetchMyReviews };
};

export default getMyReviews;