import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries/getRepositories';

const useRepositories = () => {
  const [repositories, setRepositories] = useState();
  const { data, error, loading } = useQuery(GET_REPOSITORIES, { fetchPolicy: 'cache-and-network' })

  const fetchRepositories = async () => {
    await data
    try {
      setRepositories(data.repositories);
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    fetchRepositories();
  }, []);

  return {
    repositories,
    loading,
    refetch: fetchRepositories
  }
};

export default useRepositories;