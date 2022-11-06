// import Constants from 'expo-constants';
import { StyleSheet, View } from 'react-native';
import Text from './Text';

import RepositoryList from './repositoryList/RepositoryList';
import AppBar from './appBar/AppBar';


const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShring: 1
  },
});

const Main = () => {
  return (<>
    <AppBar >
    <Text  fontSize='subHeading' fontWeight='bold' color='primary'>
        Rate Repository Applications
      </Text>
      </AppBar>
    <View style={styles.container}>
      <RepositoryList />
    </View>
    </>
  );
};

export default Main;