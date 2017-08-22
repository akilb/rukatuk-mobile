import { StyleSheet } from 'react-native';
import appStyles, { theme } from '../../config/styles';

const styles = StyleSheet.create({
  segmentedTabsContainer: {
    margin: 20,
    backgroundColor: theme.colours.secondary
  },
  container: {
    flex: 1,
    backgroundColor: theme.colours.secondary
  }
});

export default styles;