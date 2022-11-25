import * as yup from 'yup';
import styles from './styles';
import { Formik } from 'formik';
import { Pressable, View } from 'react-native';
import FormikTextInput from '../reuseableComponents/FormikTextInput';
import Text from '../reuseableComponents/Text';

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

const SignInForm = ({ onSubmit }) => {
  const handleSubmit = (values) => {
    onSubmit(values)
  };

  return (
    <Formik style={styles.padding} initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {({ handleSubmit }) =>
        <View style={styles.container}>
          <FormikTextInput style={styles.input} name={'username'} placeholder={'Username'} />
          <FormikTextInput style={styles.input} name={'password'} placeholder={'Password'} secureTextEntry={true} />

          <Pressable style={[styles.button, styles.marginTop10]} onPress={handleSubmit}>
            <Text fontWeight={'bold'} color={'whiteText'}>
              Sign in
            </Text>
          </Pressable>
        </View>
      } 
    </Formik>
  )
};

export default SignInForm;
