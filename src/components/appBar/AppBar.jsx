import { View, StyleSheet, Pressable, Alert } from 'react-native';
import Constants from 'expo-constants';
import Text from '../Text';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#24292e', 
    height: 150,
    padding: 20,
  },
  content: {
    display: 'flex',
    justifyContent: 'center'
  },
  appBarText: {
    color: '#FFF'
  }
  // ...
});

const AppBar = () => {
  return <View style={[styles.container, styles.content]}>
    <Pressable onPress={() => Alert.alert('Pressed')}>
      <Text color='whiteText' fontSize='bold'>
        Repositories
      </Text>
    </Pressable>
  </View>;
};

export default AppBar;