import { useParams } from 'react-router-native';
import useGetRepository from '../../../hooks/useGetRepository';
import SingleRepositoryContainer from './SingleRepositoryContainer';
import * as Linking from 'expo-linking';
import React from 'react';

const SingleRepository = () => {
  const first = 5;
  const id = useParams().id;
  const { repository, loading, refetch, fetchMore } = useGetRepository({ id, first });

  const logIntoGithub = (url) => Linking.openURL(url);

  const onEndReach = () => fetchMore();

  React.useEffect(() => {
    refetch();
  }, [fetchMore])
  
  if (!repository) {
    refetch();
  } else if (repository) {
    return <SingleRepositoryContainer repository={repository} onClick={logIntoGithub} onEndReach={onEndReach} />;
  };
};

export default SingleRepository;