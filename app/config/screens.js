import { Navigation } from 'react-native-navigation';

import EventsScreen from '../screens/events/EventsScreen';
import EventDetailScreen from '../screens/event-detail/EventDetailScreen';
import SocialScreen from '../screens/social/SocialScreen';

const screens = {
  events: 'Rukatuk.EventsScreen',
  eventDetail: 'Rukatuk.EventDetailScreen',
  social: 'Rukatuk.SocialScreen'
};

function registerScreens() {
  Navigation.registerComponent(screens.events, () => EventsScreen);
  Navigation.registerComponent(screens.eventDetail, () => EventDetailScreen);
  Navigation.registerComponent(screens.social, () => SocialScreen);
}

export { screens, registerScreens };