import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { Link } from 'react-router-native';
import Tab from './Tab';
import useCheckAuthentication from '../../hooks/useCheckAuthentication';
import useAuthStorage from '../../hooks/useAuthStorage';
import { useApolloClient } from '@apollo/client';
import { useNavigate } from 'react-router-native';


const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#24292e',
    height: 75,
    padding: 20
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  appBarText: {
    color: '#FFF'
  }
  // ...
});

const AppBar = () => {
  const { data, error, loading, label } = useCheckAuthentication();
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  const navigate = useNavigate();

  const signOut = async () => {
    try {
      await authStorage.removeAccessToken();
      apolloClient.resetStore();
      navigate('/');
      
    } catch (error) {
      console.log("Unable to sign Out:", error)
    }
  };

  const signInLabel = (label === 'Sign In')
    ? <Link to={'signIn'}>
        <Tab label={'Sign In'} />
      </Link>
    : <Link onPress={signOut} >
        <Tab label={label} />
      </Link>

  return (
    <View style={[styles.container, styles.content]}>
      <ScrollView horizontal>
        <Link to='/'>
          <Tab label={'Repositories'} />
        </Link>
        {(label === 'Sign Out') && <Link to='/reviewForm'>
          <Tab label={'Create Review'} />
        </Link>}
        {signInLabel}
      </ScrollView>
    </View>
  );
};

export default AppBar;
