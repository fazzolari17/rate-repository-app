import style from './styles';
import { Formik } from 'formik';
import SignInForm from './SignInForm';

const initialValues = {
  username: '',
  password: ''
};

const validation = (values) => {
  const requiredError = 'Field is required';
  const errors = {};
  if (!values.userName) {
    errors.userName = requiredError;
  }
  if (!values.password) {
    errors.password = requiredError;
  }
  return errors;
};

const SignIn = () => {
  const onSubmit = ({ username, password }) => {
    console.log(username, password);
  };

  return (
    <>
      <Formik style={style.padding} initialValues={initialValues} onSubmit={onSubmit} validate={validation}>
        {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
      </Formik>
    </>
  );
};

export default SignIn;
