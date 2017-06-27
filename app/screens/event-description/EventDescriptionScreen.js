import React, { Component } from 'react';
import {
  ScrollView,
  Text
} from 'react-native';

import appStyles, { theme, navigatorStyle } from '../../config/styles';

export default class EventDescriptionScreen extends Component {
  static navigatorStyle = navigatorStyle;

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScrollView style={appStyles.container}>
        <Text style={appStyles.p}>
          {this.props.event.descriptionText}
        </Text>
      </ScrollView>
    );
  }
}