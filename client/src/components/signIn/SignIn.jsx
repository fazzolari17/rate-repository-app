import * as yup from 'yup';
import style from './styles';
import { Formik } from 'formik';
import SignInForm from './SignInForm';
import { useSignIn } from '../../hooks/useSignIn';

const initialValues = {
  username: '',
  password: ''
};

const validationSchema = yup.object().shape({
username: yup
  .string()
  .min(3, 'Username be three or more characters.')
  .required('Username is required'),
password: yup
  .string()
  .min(7, 'Password must be 7 or more characters')
  .required('Password is required')
});

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
        <Formik style={style.padding} initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
        {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
        </Formik>
    </>
  );
};

export default SignIn;
