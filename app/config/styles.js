import { StyleSheet } from 'react-native';

const theme = {
  colours: {
    primary: '#fbb632',
    secondary: '#2c2c2c',
    dark: '#212121',
    light: '#bebebe',
  }
}

const navigatorStyle = {
  navBarTextColor: 'white',
  navBarBackgroundColor: theme.colours.dark,
  navBarButtonColor: 'white'
}

const appStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141414',
  },

  card: {
    flex: 1,
    margin: 10,
    backgroundColor: theme.colours.secondary,
    borderColor: '#414141',
    borderWidth: 0,
    borderBottomWidth: 2,
    borderRadius: 3
  }
});

export default appStyles;
export { theme, navigatorStyle };