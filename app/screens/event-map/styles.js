import {
  Dimensions,
  Platform,
  StyleSheet
} from 'react-native';
import appStyles, { theme } from '../../config/styles';

let toolbarBottomHeight = Platform.OS === 'ios' ? 113 : 136;
let addressFooterHeight = 80;
const styles = StyleSheet.create({
  map: {
    height: Dimensions.get('window').height - addressFooterHeight - toolbarBottomHeight
  },
  addressFooter: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: theme.colours.secondary,
    padding: 10
  }
});

export default styles;