import { Navigation } from 'react-native-navigation';
import { screens, registerScreens } from './config/screens';
import { images } from './config/images';

registerScreens();

Navigation.startTabBasedApp({
  tabs: [
    {
      label: 'Events',
      screen: screens.events,
      icon: images.icons.tabs.events,
      selectedIcon: images.icons.tabs.eventsSelected,
      title: 'Events'
    },
    {
      label: 'Social',
      screen: screens.social,
      icon: images.icons.tabs.social,
      selectedIcon: images.icons.tabs.socialSelected,
      title: 'Social'
    }
  ]
});