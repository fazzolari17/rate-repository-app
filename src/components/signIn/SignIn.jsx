import * as yup from 'yup';
import style from './styles';
import { Formik } from 'formik';
import SignInForm from './SignInForm';

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
// const validation = (values) => {
//   const requiredError = 'Field is required';
//   const errors = {};
//   if (!values.userName) {
//     errors.userName = requiredError;
//   }
//   if (!values.password) {
//     errors.password = requiredError;
//   }
//   return errors;
// };

const SignIn = () => {
  const onSubmit = ({ username, password }) => {
    console.log(username, password);
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
