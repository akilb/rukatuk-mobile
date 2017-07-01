import {
  Dimensions,
  Platform,
  StyleSheet
} from 'react-native';
import appStyles, { theme } from '../../config/styles';

let toolbarBottomHeight = Platform.OS === 'ios' ? 113 : 136;
let footerHeight = 60;
let footerWidth = Dimensions.get('window').width;
let footerTop = Dimensions.get('window').height - footerHeight - toolbarBottomHeight;

const styles = StyleSheet.create({
  separator: {
    height: 1,
    backgroundColor: theme.colours.dark,
    alignSelf: 'stretch',
    marginTop: 10,
    marginBottom: 10
  },
  footer: {
    backgroundColor: 'rgba(10, 10, 10, 0.7)',
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: footerHeight,
    top: footerTop,
    width: footerWidth
  },
  button: {
    margin: 6,
    backgroundColor: theme.colours.primary,
    borderColor: theme.colours.primary
  },
  buttonText: {
    fontSize: 16,
    color: 'white'
  }
});

export default styles;