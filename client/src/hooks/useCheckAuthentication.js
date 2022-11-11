import { useQuery } from '@apollo/client';
import { CHECK_AUTHENTICATION } from '../graphql/queries/checkAauthentication';

const useCheckAuthentication = () => {
  const { data, error, loading } = useQuery(CHECK_AUTHENTICATION, { fetchPolicy: 'cache-and-network' });
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

export default useCheckAuthentication;