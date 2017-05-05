import React, { Component } from 'react';
import {
  SegmentedControlIOS,
  StyleSheet,
  View,
  WebView
} from 'react-native';

import appStyles, { theme } from '../../config/styles';
import styles from './styles';
import { socialItems } from './SocialScreen.common';

export default class SocialScreen extends Component {
  static navigatorStyle = {
    navBarHidden: true
  }

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
      <View style={styles.socialContainer}>
        <SegmentedControlIOS
          style={styles.segmentedBar}
          values={values}
          tintColor={theme.colours.primary}
          selectedIndex={this.state.selectedIndex}
          onChange={this._onChange}/>
        <WebView source={{ uri: this.state.url }} />
      </View>
    );
  }

  _onChange = (event) => {
    this.setState({
      selectedIndex: event.nativeEvent.selectedSegmentIndex,
      url: socialItems[event.nativeEvent.selectedSegmentIndex].url
    });
  };
}