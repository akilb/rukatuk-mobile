import { StyleSheet } from 'react-native';
import appStyles, { theme } from '../../config/styles';

const styles = StyleSheet.create({
  segmentedBar: {
    margin: 20,
    backgroundColor: theme.colours.secondary
  },
  socialContainer: {
    flex: 1,
    backgroundColor: theme.colours.dark
  }
});

export default styles;