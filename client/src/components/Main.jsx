import { StyleSheet, View } from 'react-native';

import RepositoryList from './repositoryList/RepositoryList';
import AppBar from './appBar/AppBar';
import SignIn from './signIn/SignIn';
import { Routes, Route, Navigate } from 'react-router-native';
import SingleRepository from './repositoryList/singleView/SingleRepository';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShring: 1
  }
});

const Main = () => {
  return (
    <>
      <View style={styles.container}>
        <AppBar />
        <Routes>
          <Route path='/' element={<RepositoryList />} exact />
          <Route path='signIn' element={<SignIn />} />
          <Route path='/:id' element={<SingleRepository />} />
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
      </View>
    </>
  );
};

export default Main;
