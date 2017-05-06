import React, { Component } from 'react';
import {
  View,
  WebView
} from 'react-native';
import SegmentedControlTab from 'react-native-segmented-control-tab'

import styles from './styles';
import appStyles, { theme, navigatorStyle } from '../../config/styles';
import { settings } from '../../config/settings';

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
          tabsContainerStyle={{ height: 50, backgroundColor: '#F2F2F2' }}
          tabStyle={{ backgroundColor: '#F2F2F2', borderWidth: 0 }}
          activeTabStyle={{ backgroundColor: 'white', marginTop: 2 }}
          tabTextStyle={{ color: '#444444', fontWeight: 'bold' }}
          activeTabTextStyle={{ color: '#888888' }} />
        <WebView source={{ uri: this.state.url }} />
      </View>
    );
  }

  _onTabPress = (index) => {
    this.setState({
      selectedIndex: index,
      url: socialItems[index].url
    });
  };
}