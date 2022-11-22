import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_SINGLE_REPOSITORY } from '../graphql/queries/getSingleRepository';

const useGetRepository = ({ id, first }) => {
  const [repository, setRepository] = useState();
  const { data, error, loading, refetch, fetchMore, ...result } = useQuery(GET_SINGLE_REPOSITORY, {
    fetchPolicy: 'cache-and-network',
    variables: {
      repositoryId: id,
      first,
    },
  });


  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repository.reviews.pageInfo.hasNextPage;

    if (!canFetchMore) return;

    fetchMore({
      variables: {
        after: data.repository.reviews.pageInfo.endCursor,
      }
    })
  };

  const fetchRepository = async () => {
      try {
        setRepository(data.repository);
      } catch (e) {
        console.log(e);
      }
  };

  useEffect(() => {
    refetch();
  }, [])

  return {
    repository,
    loading,
    refetch: fetchRepository,
    fetchMore: handleFetchMore,
  }
};

export default useGetRepository;