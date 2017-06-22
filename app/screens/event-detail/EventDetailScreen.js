import React, { Component } from 'react';
import {
  Image,
  ScrollView,
  Text,
  View
} from 'react-native';
import Moment from 'moment';
import Icon from 'react-native-vector-icons/FontAwesome';

import appStyles, { theme, navigatorStyle } from '../../config/styles';
import styles from './styles';

export default class EventDetailScreen extends Component {
  static navigatorStyle = navigatorStyle;

  constructor(props) {
    super(props);
  }

  render() {
    let event = this.props.event;
    let startDateText = Moment(event.startDate).format('ddd, D MMM YYYY @ hh:mm a');
    let endDateText = Moment(event.endDate).format('hh:mm a')
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

        <View style={[
          appStyles.card,
          {
            alignItems: 'center',
            justifyContent: 'center',
            padding: 16
          }
        ]}>
          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Icon name="calendar-o" style={[
              appStyles.p,
              {
                marginRight: 12,
                fontSize: 22
              }
            ]}></Icon>
            <Text style={appStyles.p}>
              {startDateText} - {endDateText}
            </Text>
          </View>

          <View style={styles.separator} />

          <Text
            style={appStyles.p}
            ellipsizeMode={"tail"}
            numberOfLines={6}>
            {event.descriptionText}
          </Text>

          <View style={styles.separator} />

          <Text
            textAlign='center'
            style={{
              color: theme.colours.primary,
              fontSize: 15,
              marginTop: 2
            }}>
            Learn more
          </Text>
        </View>
      </ScrollView>
    );
  }
}