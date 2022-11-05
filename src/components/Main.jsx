import Constants from 'expo-constants';
import { Text, StyleSheet, View, FlatList } from 'react-native';

import RepositoryList, { repositories  } from './RepositoryList';


const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flexGrow: 1,
    flexShring: 1
  },
});

const Main = () => {
  return (<>
    <View style={styles.container}>
      <Text>Rate Repository Applications</Text>
      <FlatList
        data={repositories}
      />
      <RepositoryList />
    </View>
    </>
  );
};

export default Main;