import {
  TextInput as NativeTextInput,
  StyleSheet
} from 'react-native';
import theme from '../theme';

// eslint-disable-next-line no-unused-vars
const styles = StyleSheet.create({
  borderError: {
    borderColor: theme.colors.errorColor
  },
  borderNormal: {
    borderBottomColor: theme.colors.normalBorder
  }
});

const TextInput = ({ style, error, ...props
}) => {
  const textInputStyle = [style];
  const borderColor = error ? styles.borderError : styles.borderNormal;

  return (
    <NativeTextInput
      style={[textInputStyle, borderColor]}
      {...props}
    />
  );
};

export default TextInput;
