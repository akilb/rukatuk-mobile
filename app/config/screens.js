import { Navigation } from 'react-native-navigation';

import EventsScreen from './screens/events/EventsScreen';
import SocialScreen from './screens/social/SocialScreen';

// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('Rukatuk.EventsScreen', () => EventsScreen);
  Navigation.registerComponent('Rukatuk.SocialScreen', () => SocialScreen);
}