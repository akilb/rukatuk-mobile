import { Navigation } from 'react-native-navigation';

import EventsScreen from '../screens/events/EventsScreen';
import EventDetailScreen from '../screens/event-detail/EventDetailScreen';
import EventDescriptionScreen from '../screens/event-description/EventDescriptionScreen';
import EventMapScreen from '../screens/event-map/EventMapScreen';
import SocialScreen from '../screens/social/SocialScreen';

const screens = {
  events: 'Rukatuk.EventsScreen',
  eventDetail: 'Rukatuk.EventDetailScreen',
  eventDescription: 'Rukatuk.EventDescriptionScreen',
  eventMap: 'Rukatuk.EventMapScreen',
  social: 'Rukatuk.SocialScreen'
};

function registerScreens() {
  Navigation.registerComponent(screens.events, () => EventsScreen);
  Navigation.registerComponent(screens.eventDetail, () => EventDetailScreen);
  Navigation.registerComponent(screens.eventDescription, () => EventDescriptionScreen);
  Navigation.registerComponent(screens.eventMap, () => EventMapScreen);
  Navigation.registerComponent(screens.social, () => SocialScreen);
}

export { screens, registerScreens };