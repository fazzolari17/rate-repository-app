import { Pressable } from "react-native";
import Text from './Text';
import theme from '../../theme';

const Button = ({
  children,
  handleClick,
  labelTextColor,
  fontWeight,
  fontSize,
  style,
  ...props
}) => {

  const styles = {
    button: {
      padding: 15,
      borderRadius: 5,
    }
  };

  return (
    <Pressable style={[styles.button, style]} {...props} onPress={handleClick}>
      <Text color={labelTextColor} fontWeight={fontWeight} fontSize={fontSize}>
        {children}
      </Text>
    </Pressable>
  )
};

export default Button;
