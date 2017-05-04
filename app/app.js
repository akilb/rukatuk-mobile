import { Navigation } from 'react-native-navigation';
import { registerScreens } from './config/screens';
import { images } from './config/images';

registerScreens();

Navigation.startTabBasedApp({
  tabs: [
    {
      label: 'Events',
      screen: 'Rukatuk.EventsScreen',
      icon: images.icons.tabs.events,
      selectedIcon: images.icons.tabs.eventsSelected,
      title: 'Events'
    },
    {
      label: 'Social',
      screen: 'Rukatuk.SocialScreen',
      icon: images.icons.tabs.social,
      selectedIcon: images.icons.tabs.socialSelected,
      title: 'Social'
    }
  ]
});