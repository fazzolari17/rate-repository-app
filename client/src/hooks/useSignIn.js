import { useMutation, useApolloClient } from '@apollo/client';
import { AUTHENTICATE } from "../graphql/mutations/signIn"
import useAuthStorage from './useAuthStorage';
import { useNavigate } from 'react-router-native';

export const useSignIn = () => {
  const apolloClient = useApolloClient();
  const authStorage = useAuthStorage();
  const [authenticate, result] = useMutation(AUTHENTICATE);
  let navigate = useNavigate();
  
  const signIn = async ({ username, password }) => {
    
    try {
      const { data } = await authenticate({ variables: { credentials: { username, password } } });
      await authStorage.setAccessToken(data.authenticate.accessToken)
      const token = await authStorage.getAccessToken();
      navigate('/');
      apolloClient.resetStore();
      return { data: token };
    } catch (error) {
      console.log('ERROR', error);
    };
  };
 
  return [signIn, result];
};