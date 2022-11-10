import { useMutation, gql } from '@apollo/client';
import { AUTHENTICATE } from "../graphql/mutations/signIn"

export const useSignIn = () => {
  const [authenticate, result] = useMutation(AUTHENTICATE);
  
  const signIn = async ({ username, password }) => {
    try {
      authenticate({ variables: { credentials: { username, password } } });
      console.log(result.data.authenticate.accessToken)
    } catch (error) {
      console.log('ERROR', error);
    };
  };
 
  return [signIn, result];
};