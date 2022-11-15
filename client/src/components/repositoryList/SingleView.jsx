import Item from './Item';
import { useParams } from 'react-router-native';
import useGetRepository from '../../hooks/useGetRepository';

const SingleView = () => {
  const id = useParams().id;
  const show = true;
  const { repository, loading, refetch } = useGetRepository({ id });

  if (!repository) {
    refetch();
  } else if (repository) {
    const item = repository
    return <Item data={{ item, show }} />;
  };
};

export default SingleView;