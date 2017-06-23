import React, { Component } from 'react';
import {
  Image,
  ScrollView,
  Text,
  View
} from 'react-native';
import Moment from 'moment';
import Icon from 'react-native-vector-icons/FontAwesome';
import MapView from 'react-native-maps';

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

        <View style={appStyles.card}>
          <MapView
            style={{
              height: 200
            }}
            initialRegion={{
              latitude: Number.parseFloat(event.venue.latitude),
              longitude: Number.parseFloat(event.venue.longitude),
              latitudeDelta: 0.005,
              longitudeDelta: 0.010,
            }}
            zoomEnabled={false}
            rotateEnabled={false}
            scrollEnabled={false}
            pitchEnabled={false}
          />
          <View style={{ padding: 10 }}>
            <Text style={[
              appStyles.p,
              {
                fontWeight: 'bold'
              }
            ]}>
              {event.venue.name}
            </Text>
            <Text style={appStyles.p}>
              {event.venue.addressLine1}
            </Text>
            <Text style={appStyles.p}>
              {event.venue.city}, {event.venue.postalCode}
            </Text>
            <Text style={appStyles.p}>
              {event.venue.country}
            </Text>
          </View>
        </View>
      </ScrollView>
    );

    // {"city":"London","country":"United Kingdom","postalCode":"SE10 0DX","longitude":"0.003664100000037251","addressLine1":"The O2","latitude":"51.5025248","addressLine2":"Greenwich","name":"All Bar One O2"}
  }
}