import { StyleSheet } from 'react-native';

const theme = {
  colours: {
    primary: '#fbb632',
    secondary: '#2c2c2c',
    dark: '#212121',
    light: '#bebebe',
    background: '#141414'
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
    backgroundColor: theme.colours.background,
  },

  card: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 6,
    marginBottom: 6,
    backgroundColor: theme.colours.secondary,
    borderColor: '#414141',
    borderWidth: 0,
    borderBottomWidth: 2,
    borderRadius: 3
  },

  p: {
    color: theme.colours.light,
    fontSize: 13
  }
});

export default appStyles;
export { theme, navigatorStyle };