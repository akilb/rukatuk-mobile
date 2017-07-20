import React, { Component } from 'react';
import {
  ScrollView,
  Text,
  View
} from 'react-native';

import appStyles, { theme, navigatorStyle } from '../../config/styles';
import { trackScreenView, trackEvent } from '../../utils/analytics';

export default class EventDescriptionScreen extends Component {
  static navigatorStyle = navigatorStyle;

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    trackScreenView('Event Description - ' + this.props.event.name);
  }

  render() {
    return (
      <ScrollView style={appStyles.container}>
        <View style={[
          appStyles.card,
          appStyles.centerChildren,
          {
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