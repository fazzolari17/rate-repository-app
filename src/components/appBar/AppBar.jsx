import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { Link } from 'react-router-native';
import Tab from './Tab';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#24292e',
    height: 75,
    padding: 20,
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems:'center',
  },
  appBarText: {
    color: '#FFF',
  },
  // ...
});

const AppBar = () => {
  return (
    <View style={[styles.container, styles.content]}>
      <ScrollView horizontal>
        <Link to='/'><Tab label={'Repositories'}/></Link>
        <Link to='signIn'><Tab label={'Sign In'}/></Link>
      </ScrollView>
    </View>
  );
};

export default AppBar;
