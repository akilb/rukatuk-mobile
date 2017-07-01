import React, { Component } from 'react';
import {
  ScrollView,
  Text,
  View
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
        <View style={[
          appStyles.card,
          {
            alignItems: 'center',
            justifyContent: 'center',
            padding: 16
          }
        ]}>
          <Text style={appStyles.p}>
            {this.props.event.descriptionText}
          </Text>
        </View>
      </ScrollView>
    );
  }
}