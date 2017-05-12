import { Platform } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { screens, registerScreens } from './config/screens';
import { images } from './config/images';
import { theme } from './config/styles';
import { fetchRemoteEvents } from './utils/fetchEvents';

registerScreens();

const tabsStyle = {
  tabBarButtonColor: theme.colours.light,
  tabBarSelectedButtonColor: theme.colours.primary,
  tabBarBackgroundColor: theme.colours.dark,
  tabBarTranslucent: false,
  forceTitlesDisplay: true
};

function getTabsStyle() {
  return Platform.OS === 'ios' ? tabsStyle : null;
}

function getAppStyle() {
  const appStyle = Platform.OS === 'ios' ? {} : tabsStyle;
  appStyle.orientation = 'portrait';

  return appStyle;
}

function getTabs() {
  const tabs = [
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
  ];

  if (Platform.OS === 'android') {
    for (let tab of tabs) {
      tab.icon = tab.selectedIcon;
    }
  }

  return tabs;
}

Navigation.startTabBasedApp({
  tabs: getTabs(),
  tabsStyle: getTabsStyle(),
  appStyle: getAppStyle(),
  passProps: {
    fetchRemoteEvents: fetchRemoteEvents
  }
});