import * as yup from 'yup';
import styles from './styles';
import { Formik } from 'formik';
import { Pressable, View } from 'react-native';
import FormikTextInput from '../reuseableComponents/FormikTextInput';
import Text from '../reuseableComponents/Text';

const initialValues = {
  repoOwner: '',
  repoName: '',
  rating: 0,
  review: '',
};

const validationSchema = yup.object().shape({
repoOwner: yup
  .string()
  .min(3, 'Username be three or more characters.')
  .required('Repository owner name is required'),
repoName: yup
  .string()
  .required('Repository name is required'),
rating: yup
  .number()
  .min(1)
  .max(100)
  .required('Rating is Required'),
review: yup
  .string()
  .max(200, 'Maximum of 200 Characters')
  

});

const ReviewFormContainer = ({ onSubmit }) => {
  const handleSubmit = (values) => {
    onSubmit(values)
  };

  return (
    <Formik style={styles.padding} initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
      {({ handleSubmit }) =>
        <View style={styles.container}>
          <FormikTextInput style={styles.reviewInput} name={'repoOwner'} placeholder={'Repository Owner'} />
          <FormikTextInput style={styles.reviewInput} name={'repoName'} placeholder={'Repository Name'} />
          <FormikTextInput style={styles.reviewInput} name={'rating'} placeholder={'Rating between 0 and 100'} keyboardType='numeric' />
          <FormikTextInput style={styles.reviewInput} name={'review'} placeholder={'Review'} multiline numberOfLines={4} editable maxLength={201} />

          <Pressable style={[styles.button, styles.marginTop10]} onPress={handleSubmit}>
            <Text fontWeight={'bold'} color={'whiteText'}>
              Create Review
            </Text>
          </Pressable>
        </View>
      } 
    </Formik>
  )
};

export default ReviewFormContainer;
