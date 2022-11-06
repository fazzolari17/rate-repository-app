import { View, StyleSheet } from 'react-native';
import Text from '../Text';

const style = StyleSheet.create({
  centeredItems: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    marginBottom: 10,
  },
  flexContainer: {
    display: 'flex',
  },
  title: {
    fontSize: 20,
  }
});
const SmallItem = ({ value, label }) => {

  return (
      <View style={[style.flexContainer, style.centeredItems]}>
          <Text fontWeight='bold' fontSize={'heading'} style={style.title}>{value}</Text>
          <Text color={'grayText'} fontSize={'subheading'}>{label}</Text>
        </View>
  );
};

export default SmallItem;