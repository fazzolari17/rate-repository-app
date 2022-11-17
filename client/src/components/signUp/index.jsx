import SignUpForm from './SignUpForm';
import useCreateUser from '../../hooks/useCreateUser';
import { useSignIn } from '../../hooks/useSignIn';
import { useNavigate } from 'react-router-native';

const SignUp = () => {
  const [addNewUser] = useCreateUser();
  const [signIn] = useSignIn();
  const navigate = useNavigate();

  const onSubmit = async ({ username, password }) => {
    try {
      const { data } = await addNewUser({ username, password })
        await signIn({ username, password })
        navigate('/')
    } catch (error) {
      console.log(error)
    }
    return 
  };

  return <SignUpForm handleSubmit={onSubmit} />
};

export default SignUp;