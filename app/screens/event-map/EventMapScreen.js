import React, { Component } from 'react';
import {
  Linking,
  Platform,
  Text,
  View
} from 'react-native';

import MapView from 'react-native-maps';
import Icon from 'react-native-vector-icons/FontAwesome';

import appStyles, { theme, navigatorStyle } from '../../config/styles';
import { images } from '../../config/images';
import { trackScreenView, trackEvent } from '../../utils/analytics';
import styles from './styles';

export default class EventMapScreen extends Component {
  static navigatorStyle = navigatorStyle;

  constructor(props) {
    super(props);

    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  componentDidMount() {
    trackScreenView('Event Map', { Event: this.props.event.name });

    Icon
      .getImageSource('map-o', 20, 'white')
      .then((mapIcon) => {
        this.props.navigator.setButtons({
          rightButtons: [
            {
              id: 'directions',
              icon: mapIcon
            }
          ]
        });
      });
  }

  onNavigatorEvent(navigatorEvent) {
    if (navigatorEvent.type !== 'NavBarButtonPress' || navigatorEvent.id !== 'directions') {
      return;
    }

    trackEvent('Open Maps', { Event: this.props.event.name });

    let mapsUrlBase = Platform.OS === 'ios' ? 'http://maps.apple.com/?ll=' : 'geo:';
    let venue = this.props.event.venue;
    let latLongText = venue.latitude + ',' + venue.longitude;
    return Linking.openURL(mapsUrlBase + latLongText);
  }

  render() {
    let event = this.props.event;
    let region = {
      latitude: Number.parseFloat(event.venue.latitude),
      longitude: Number.parseFloat(event.venue.longitude),
      latitudeDelta: 0.005,
      longitudeDelta: 0.010,
    };
    return (
      <View style={appStyles.container}>
        <MapView
          style={styles.map}
          initialRegion={region}
          region={region}
        >
          <MapView.Marker
            image={images.icons.mapMarker}
            coordinate={{
              latitude: region.latitude,
              longitude: region.longitude
            }}
            centerOffset={{ x: 0, y: -25 }}
          />
        </MapView>
        <View style={styles.addressFooter}>
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
    );
  }
}