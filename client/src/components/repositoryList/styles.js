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
  }
});

export default styles;