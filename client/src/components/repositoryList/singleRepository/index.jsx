import { useParams } from 'react-router-native';
import useGetRepository from '../../../hooks/useGetRepository';
import SingleRepositoryContainer from './SingleRepositoryContainer';
import * as Linking from 'expo-linking';

const SingleRepository = () => {
  const id = useParams().id;
  const { repository, loading, refetch } = useGetRepository({ id });

  const logIntoGithub = (url) => Linking.openURL(url);
  
  if (!repository) {
    refetch();
  } else if (repository) {
    return <SingleRepositoryContainer repository={repository} onClick={logIntoGithub} />;
  };
};

export default SingleRepository;