import { StyleSheet } from 'react-native';
import appStyles, { theme } from '../../config/styles';

const styles = StyleSheet.create({
  separator: {
    height: 1,
    backgroundColor: theme.colours.dark,
    alignSelf: 'stretch',
    marginTop: 10,
    marginBottom: 10
  }
});

export default styles;