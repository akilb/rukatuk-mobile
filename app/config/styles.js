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
  navBarTextColor: '#ffffff',
  navBarBackgroundColor: theme.colours.dark
}

const appStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141414',
  }
});

export default appStyles;
export { theme, navigatorStyle };