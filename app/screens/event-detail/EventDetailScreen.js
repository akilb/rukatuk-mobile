import React, { Component } from 'react';
import {
  Image,
  ScrollView,
  Text,
  View
} from 'react-native';
import Moment from 'moment';

import appStyles, { theme, navigatorStyle } from '../../config/styles';

export default class EventDetailScreen extends Component {
  static navigatorStyle = navigatorStyle;

  constructor(props) {
    super(props);
  }

  render() {
    let event = this.props.event;
    return (
      <ScrollView style={appStyles.container}>
        <View style={appStyles.card}>
          <Image
            source={{ uri: event.imageUrl }}
            resizeMode='cover'
            style={{
              flex: 1,
              height: 210,
              width: undefined
            }} >
          </Image>
          <View style={{ padding: 10 }}>
            <Text style={{
              color: theme.colours.light,
              fontSize: 18,
              textAlign: 'center',
              fontWeight: 'bold'
            }}>
              {event.name}
            </Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}