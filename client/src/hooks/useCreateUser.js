import { useMutation } from '@apollo/client';
import { CREATE_USER }from '../graphql/mutations/createUser';

const useCreateUser = () => {
  const [createUser, result] = useMutation(CREATE_USER)

  const addNewUser = async ({ username, password }) => {

    try {
      const { data } = await createUser({
        fetchPolicy: 'network-only',
        variables:{
          user: {
            username,
            password
            }
        }
      });
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  return [addNewUser, result];

};

export default useCreateUser;