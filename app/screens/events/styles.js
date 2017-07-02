import { StyleSheet } from 'react-native';
import appStyles, { theme } from '../../config/styles';

const styles = StyleSheet.create({
  countdownContainer: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10
  },
  countdownHeader: {
    textAlign: 'center',
    color: theme.colours.light,
    fontSize: 13,
    fontWeight: 'bold'
  },
  digitRowContainer: {
    flex: 1,
    marginTop: 6,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  digitContainer: {
    alignItems: 'center'
  },
  digitScreen: {
    backgroundColor: '#1e1e1e',
    height: 35,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  digitValue: {
    color: theme.colours.primary
  },
  digitLabel: {
    fontSize: 11,
    color: theme.colours.light,
    paddingTop: 3
  }
});

export default styles;