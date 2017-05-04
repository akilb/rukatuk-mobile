import { Navigation } from 'react-native-navigation';

import SingleScreen from './screens/SingleScreen';

// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('Rukatuk.SingleScreen', () => SingleScreen);
}