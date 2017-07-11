import {
  Dimensions,
  StyleSheet
} from 'react-native';
import appStyles, { theme } from '../../config/styles';

const cardMargin = 10;
const upcomingImageWidth = Dimensions.get('window').width - (cardMargin * 2);
const upcomingImageHeight = upcomingImageWidth / 1.75;
const pastEventCardHeight = 180;
const pastEventImageHeight = pastEventCardHeight / 2;
const pastEventCardWidth = 120;

const styles = StyleSheet.create({
  eventSectionHeader: {
    color: theme.colours.light,
    fontSize: 18,
    margin: 16,
    marginBottom: 4
  },
  upcomingEventImage: {
    flex: 1,
    height: upcomingImageHeight,
    width: upcomingImageWidth
  },
  upcomingEventTitle: {
    color: theme.colours.light,
    fontSize: 18,
    fontWeight: 'bold'
  },
  pastEventCard: {
    height: pastEventCardHeight,
    width: pastEventCardWidth
  },
  pastEventImage: {
    flex: 1,
    height: pastEventCardHeight,
    width: pastEventCardWidth
  },
  pastEventTitle: {
    color: theme.colours.light,
    fontSize: 15,
    fontWeight: 'bold'
  },
  messageCard: {
    height: 80,
    alignItems: 'center',
    justifyContent: 'center'
  },
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