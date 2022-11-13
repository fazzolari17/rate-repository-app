import { FlatList, View, Image } from 'react-native';
import useRepositories from '../../hooks/useRepositories';
import styles from './styles';
import Item from './Item';
import RepositoryListContainer from './RepositoryListContainer';

const RepositoryList = () => {
  const { repositories, refetch } = useRepositories();

  if (!repositories) {
    refetch();
  }

  return <RepositoryListContainer repositories={repositories} />;
};

export default RepositoryList;
