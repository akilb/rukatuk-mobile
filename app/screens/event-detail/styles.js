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
const cardMargin = 10;
const imageWidth = Dimensions.get('window').width - (cardMargin * 2);
const imageHeight = imageWidth / 1.75;

const styles = StyleSheet.create({
  eventTitle: {
    color: theme.colours.light,
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  eventImage: {
    flex: 1,
    height: imageHeight
  },
  calendarIcon: {
    color: theme.colours.light,
    marginRight: 12,
    fontSize: 22
  },
  learnMoreLabel: {
    color: theme.colours.primary,
    fontSize: 15,
    marginTop: 2
  },
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