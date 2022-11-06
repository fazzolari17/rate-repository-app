import { Pressable, View } from 'react-native';
import FormikTextInput from '../FormikTextInput';
import Text from '../Text';
import { useField } from 'formik';
import styles from './styles';

const SignInForm = ({ onSubmit }) => {
  // eslint-disable-next-line no-unused-vars
  const [field, meta, helpers] = useField('name');

  return (
    <View style={styles.container}>
      <FormikTextInput style={styles.input} name={'username'} placeholder={'Username'} />
      <FormikTextInput style={styles.input} name={'password'} placeholder={'Password'} secureTextEntry={true} />

      <Pressable style={[styles.button, styles.marginTop10]} onPress={onSubmit}>
        <Text fontWeight={'bold'} color={'whiteText'}>
          Sign in
        </Text>
      </Pressable>
    </View>
  );
};

export default SignInForm;
