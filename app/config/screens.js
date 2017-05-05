import { Navigation } from 'react-native-navigation';

import EventsScreen from '../screens/events/EventsScreen';
import SocialScreen from '../screens/social/SocialScreen';

const screens = {
  events: 'Rukatuk.EventsScreen',
  social: 'Rukatuk.SocialScreen'
};

function registerScreens() {
  Navigation.registerComponent(screens.events, () => EventsScreen);
  Navigation.registerComponent(screens.social, () => SocialScreen);
}

export { screens, registerScreens };