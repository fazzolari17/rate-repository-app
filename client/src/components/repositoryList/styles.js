import { StyleSheet } from "react-native";
import theme from "../../theme";

const styles = StyleSheet.create({
  separator: {
    height: 30,
    backgroundColor: '#e1e4e8'
  },
  container: {
    padding: 25,
    flexDirection: 'row'
  },
  languageContainer: {
    backgroundColor: theme.colors.languageContainerBackground,
    padding: 15,
    alignSelf: 'flex-start',
    borderRadius: 10
  },
  item: {
    display: 'flex',
    margin: 20
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 7.5,
    marginRight: 25
  },
  flexContainer: {
    display: 'flex'
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  marginBottom: {
    marginBottom: 10
  },
  gitHubButton: {
    backgroundColor: theme.colors.languageContainerBackground,
    padding: 15,
    alignSelf: 'center',
    width: '90%',
    borderRadius: 10
  },
  gitHubButtonText: {
    alignSelf: 'center'
  },
  description: {
    width: '80%',
    marginBottom: 10,
  },
  rating: {
    display: 'flex',
    borderWidth: 2,
    padding: 10,
    borderColor: theme.colors.languageContainerBackground,
    color: theme.colors.languageContainerBackground,
    borderRadius: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,

  },
  reviewContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    padding: 10,
  },
  menuBtn: {
    fontSize: 20,
    fontWeight: 'bold',
    color: theme.colors.textPrimary,
  },
  menuBtnHeight: {
    height: 50,
  },
  menu: {
    width: '99%',
  },
  menuSelection: {
    color: '#A9A9A9'
  }, 
  reviewButtonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',

  }
});

export default styles;