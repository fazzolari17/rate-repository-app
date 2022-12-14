import { StyleSheet, View } from 'react-native';

import RepositoryList from './repositoryList/RepositoryList';
import AppBar from './appBar/AppBar';
import SignIn from './signIn/SignIn';
import { Routes, Route, Navigate } from 'react-router-native';
import SingleRepository from './repositoryList/singleRepository';
import ReviewForm from './reviewForm';
import SignUp from './signUp/index';
import MyReviews from './myReviews/MyReviews';

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
          <Route path={'/'} element={<RepositoryList />} exact />
          <Route path={'/myReviews'} element={<MyReviews />} />
          <Route path={'/signIn'} element={<SignIn />} />
          <Route path={'/signUp'} element={<SignUp />} />
          <Route path={'/:id'} element={<SingleRepository />} />
          <Route path={'/reviewForm'} element={<ReviewForm />} />
          <Route path={'*'} element={<Navigate to='/' replace />} />
        </Routes>
      </View>
    </>
  );
};

export default Main;
