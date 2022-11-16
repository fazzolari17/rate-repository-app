import { StyleSheet } from 'react-native';
import theme from '../../theme';

const styles = StyleSheet.create({
   margin: {
    margin: 5
  },
  padding: {
    padding: 5
  },
  container: {
    borderRadius: 10,
    width: 300,
    height: 200,
    margin: 50,
    padding: 15,
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  button: {
    backgroundColor: theme.colors.languageContainerBackground,
    padding: 7.5,
    borderRadius: 5,
    display: 'flex',
    alignSelf: 'flex-start',
    alignItems: 'center',
    width: 300,
    justifySelf: 'center'
  },
  input: {
    backgroundColor: '#EEE',
    borderWidth: 1,
    // borderColor: 'black',
    minWidth: 200,
    borderRadius: 5,
    marginBottom: 5,
    padding: 5,
    fontSize: 24
  },
  marginTop10: {
    marginTop: 10
  },
  reviewInput: {
    backgroundColor: '#EEE',
    borderWidth: 1,
    // borderColor: 'black',
    minWidth: 300,
    borderRadius: 5,
    marginBottom: 5,
    padding: 5,
    fontSize: 24
  }
})

export default styles;