import React, { Component } from 'react';
import {
  View,
  WebView
} from 'react-native';
import SegmentedControlTab from 'react-native-segmented-control-tab'

import styles from './styles';
import appStyles, { theme, navigatorStyle } from '../../config/styles';
import { settings } from '../../config/settings';
import { trackScreenView, trackEvent } from '../../utils/analytics';

const socialItems = [
  { title: 'Instagram', url: settings.instagramUrl },
  { title: 'Facebook', url: settings.facebookUrl },
  { title: 'Twitter', url: settings.twitterUrl }
];

export default class SocialScreen extends Component {
  static navigatorStyle = navigatorStyle

  constructor(props) {
    super(props);

    this.state = {
      selectedIndex: 0,
      url: socialItems[0].url
    };
  }

  componentDidMount() {
    trackScreenView('Social');
  }

  render() {
    let values = [];
    for (let item of socialItems) {
      values.push(item.title);
    }

    return (
      <View style={appStyles.container}>
        <SegmentedControlTab
          values={values}
          selectedIndex={this.state.selectedIndex}
          onTabPress={this._onTabPress}
          borderRadius={0}
          tabsContainerStyle={{
            height: 50,
            backgroundColor: theme.colours.secondary
          }}
          tabStyle={{ backgroundColor: theme.colours.secondary, borderWidth: 0 }}
          activeTabStyle={{ backgroundColor: '#3c3c3c', marginTop: 2 }}
          tabTextStyle={{ color: theme.colours.light, fontWeight: 'bold' }}
          activeTabTextStyle={{ color: theme.colours.primary }} />
        <WebView source={{ uri: this.state.url }} />
      </View>
    );
  }

  _onTabPress = (index) => {
    let item = socialItems[index];

    trackEvent('Social Tab Selected', { Tab: item.title });

    this.setState({
      selectedIndex: index,
      url: item.url
    });
  };
}