import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_SINGLE_REPOSITORY } from '../graphql/queries/getSingleRepository';

const useGetRepository = ({ id }) => {
  const [repository, setRepository] = useState();
  const { data, error, loading } = useQuery(GET_SINGLE_REPOSITORY, {
    variables: { repositoryId: id },
    fetchPolicy: 'cache-and-network'
  });

  const fetchRepository = async () => {
      try {
        setRepository(data.repository);
      } catch (e) {
        console.log(e);
      }
  };

  useEffect(() => {
    fetchRepository();
  }, [])

  return {
    repository,
    loading,
    refetch: fetchRepository
  }
};

export default useGetRepository;