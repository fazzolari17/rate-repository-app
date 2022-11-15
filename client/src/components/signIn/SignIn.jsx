import SignInForm from './SignInForm';
import { useSignIn } from '../../hooks/useSignIn';


const SignIn = () => {
  const [signIn] = useSignIn();
  
  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      const { data } = await signIn({ username, password });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <SignInForm onSubmit={onSubmit} />
    </>
  );
};

export default SignIn;
