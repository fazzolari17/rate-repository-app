import { useQuery } from '@apollo/client';
import { GET_CURRENT_USER } from '../graphql/queries/getCurrentUser';

const useGetCurrentUser = () => {
  const { data, error, loading } = useQuery(GET_CURRENT_USER, { fetchPolicy: 'cache-and-network' });
  let label;

  if (loading) {
    return 'Loading...'
  } else {
    if (data.me === null) {
      label = 'Sign In'
    } else {
      label = 'Sign Out'
    }
  }
 
  return {
    loading,
    error,
    data,
    label
  }
};

export default useGetCurrentUser;