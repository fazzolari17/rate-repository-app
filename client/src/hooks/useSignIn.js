import { useMutation, gql } from '@apollo/client';
import { AUTHENTICATE } from "../graphql/mutations/signIn"
import AuthStorage from '../utils/authStorage';

export const useSignIn = () => {
  const tokenStorage = new AuthStorage('auth')
  const [authenticate, result] = useMutation(AUTHENTICATE);
  
  const signIn = async ({ username, password }) => {
    
    try {
      authenticate({ variables: { credentials: { username, password } } });
      await tokenStorage.setAccessToken(result.data.authenticate.accessToken)
      const token = await tokenStorage.getAccessToken();
      return { data: token };
    } catch (error) {
      console.log('ERROR', error);
    };
  };
 
  return [signIn, result];
};