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
  navBarBackgroundColor: theme.colours.dark
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
    borderColor: theme.colours.secondary,
    borderWidth: 0,
    borderRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 1.5,
    shadowOpacity: 0.5,
    shadowColor: '#666666'
  }
});

export default appStyles;
export { theme, navigatorStyle };