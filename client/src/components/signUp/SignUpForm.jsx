import * as yup from 'yup';
import YupPassword from 'yup-password'
import styles from './styles';
import { Formik } from 'formik';
import { Pressable, View } from 'react-native';
import FormikTextInput from '../reuseableComponents/FormikTextInput';
import Text from '../reuseableComponents/Text';

YupPassword(yup)

const initialValues = {
  username: '',
  password: '',
  passwordConfirmation: '', 
};

const usernameError = 'username be between 1 and 30 characters.';
const passwordError = 'password must be between 5 and 50 characters';

const validationSchema = yup.object().shape({
username: yup
  .string()
  .min(1, usernameError)
  .max(30, usernameError)
  .required('username is required'),
password: yup
  .string()
  .password()
  .min(5, passwordError)
  .max(50, passwordError)
  .required('password is required'),
  passwordConfirmation: yup
  .string()
  .oneOf([yup.ref('password'), null], 'passwords must match')
  .required('password is required')
});

const SignUpForm = ({ handleSubmit }) => {

  return (
    <Formik style={styles.padding} initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
      {({ handleSubmit }) =>
        <View style={styles.container}>
          <FormikTextInput style={styles.input} name={'username'} placeholder={'Username'} />
          <FormikTextInput style={styles.input} name={'password'} placeholder={'Password'} secureTextEntry={true} />
          <FormikTextInput style={styles.input} name={'passwordConfirmation'} placeholder={'Confirm Password'} secureTextEntry={true} />

          <Pressable style={[styles.button, styles.marginTop10]} onPress={handleSubmit}>
            <Text fontWeight={'bold'} color={'whiteText'}>
              Sign Up
            </Text>
          </Pressable>
        </View>
      } 
    </Formik>
  )
};

export default SignUpForm;