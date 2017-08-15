import React, { Component } from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  RefreshControl,
  ScrollView,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import Moment from 'moment';
import Badge from 'react-native-smart-badge';

import appStyles, { theme, navigatorStyle } from '../../config/styles';
import styles from './styles';
import { images } from '../../config/images';
import { screens } from '../../config/screens';
import ImageWithPlaceholder from '../../utils/ImageWithPlaceholder';
import { trackScreenView, trackEvent } from '../../utils/analytics';
import Countdown from './Countdown';

export default class EventsScreen extends Component {
  static navigatorStyle = navigatorStyle

  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      refreshing: false,
      isError: false,
      upcomingEvents: [],
      pastEvents: []
    };
  }

  componentDidMount() {
    trackScreenView('Events');

    this.fetchEvents();
  };

  _onRefresh() {
    trackEvent('UI Action', 'Pull-To-Refresh', {label: 'Refresh Events'});

    this.setState({ refreshing: true });

    this.fetchEvents();
  }

  _onPressEvent(event) {
    this.props.navigator.push({
      screen: screens.eventDetail,
      title: 'Event Details',
      passProps: {event}
    });
  }

  fetchEvents() {
    this.setState({ loading: true });

    this.props.fetchEvents.fetchLocalEvents()
      .then(events => this.updateEvents(events))
      .then(() => this.props.fetchEvents.fetchRemoteEvents())
      .then(events => this.updateEvents(events))
      .catch(err => {
        trackEvent('Data', 'Error loading events');

        this.setState({
          loading: false,
          refreshing: false,
          isError: true
        });
      })
      .done();
  }

  updateEvents(events) {
    events.sort(this.compareEvents);

    let upcomingEvents = [];
    let pastEvents = [];
    let now = new Date();
    for (let e of events) {
      let startDate = new Date(e.startDate);
      if (startDate > now) {
        upcomingEvents.push(e);
      } else {
        pastEvents.push(e);
      }
    }

    upcomingEvents.sort((a, b) => this.compareEvents(a, b) * -1);

    this.setState({
      loading: false,
      refreshing: false,
      isError: false,
      upcomingEvents: upcomingEvents,
      pastEvents: pastEvents
    });
  }

  compareEvents(e1, e2) {
    if (e1.startDate === e2.startDate) {
      return 0;
    }

    return e1.startDate > e2.startDate ? -1 : 1;
  }

  render() {
    let hasEvents = this.state.upcomingEvents.length > 0 ||
                    this.state.pastEvents.length > 0;
    if (!hasEvents && this.state.loading) {
      return (
        <View style={[appStyles.container, appStyles.centerChildren]}>
          <ActivityIndicator animating={true} size='large' />
        </View>
      );
    }

    let errorMessage = 'Oops! We couldn\'t load events. Pull on this card to try again.';
    return (
        <ScrollView
          style={appStyles.container}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={() => this._onRefresh()} />
          }>
          {!hasEvents && this.state.isError && this.renderMessageCard(errorMessage)}

          {hasEvents && this.renderUpcomingEvents()}

          {hasEvents && this.renderPastEvents()}
        </ScrollView>
    );
  }

  renderUpcomingEvents() {
    if (!this.state.upcomingEvents.length) {
      return this.renderMessageCard('Stay tuned! Our next event is coming soon...')
    }

    let nextEvent = this.state.upcomingEvents[0];
    return (
      <View>
        <Countdown date={new Date(nextEvent.startDate)} />
        <View>
          {this.state.upcomingEvents.map((event) => this.renderUpcomingEvent(event))}
        </View>
      </View>
    );
  }

  renderPastEvents() {
    return (
      <View>
        <Text style={styles.eventSectionHeader}>
          Past Events
        </Text>

        <FlatList
          data={this.state.pastEvents}
          renderItem={(item) => this.renderPastEvent(item)}
          keyExtractor={(event) => event.id}
          horizontal={true} />
      </View>
    );
  }

  renderUpcomingEvent(event) {
    return (
      <TouchableHighlight key={event.id} onPress={() => this._onPressEvent(event)}>
        <View style={appStyles.card}>
          <ImageWithPlaceholder
            resizeMode='cover'
            style={styles.upcomingEventImage}
            source={{ uri: event.imageUrl }}
            placeholderSource={images.placeHolder.large} />
          <View style={{ padding: 10 }}>
            <Text style={styles.upcomingEventTitle}>
              {event.name}
            </Text>
            <Text style={{
              color: theme.colours.subtle,
              paddingTop: 3
            }}>
              {event.venue.name}
            </Text>
            <View style={{
              flexDirection: 'row',
              justifyContent: 'space-between'
            }}>
              <Text style={{
                color: theme.colours.subtle,
                paddingTop: 1
              }}>
                {Moment(event.startDate).format('ddd, D MMM @HH:mm')}
              </Text>
              <Badge style={{backgroundColor: theme.colours.primary}}>LIVE</Badge>
            </View>
          </View>
        </View>
      </TouchableHighlight>
    );
  }

  renderPastEvent(item) {
    let event = item.item;
    return (
      <TouchableHighlight key={event.id} onPress={() => this._onPressEvent(event)}>
        <View
          key={event.id}
          style={[appStyles.card, styles.pastEventCard]}>
          <ImageWithPlaceholder
            resizeMode='contain'
            style={styles.pastEventImage}
            source={{ uri: event.smallImageUrl }}
            placeholderSource={images.placeHolder.small} />
          <View style={{
            padding: 6,
            paddingTop: 10
          }}>
            <Text
              ellipsizeMode={'tail'}
              numberOfLines={1}
              style={styles.pastEventTitle}>
              {event.name}
            </Text>
            <Text
              ellipsizeMode={'tail'}
              numberOfLines={1}
              style={styles.pastEventSubtleText}>{event.venue.name}</Text>
            <Text
              ellipsizeMode={'tail'}
              numberOfLines={1}
              style={styles.pastEventSubtleText}>{Moment(event.startDate).format('D MMM YYYY')}</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }

  renderMessageCard(message) {
    <View style={[appStyles.card, styles.messageCard]}>
      <Text style={{
        color: theme.colours.light,
        fontSize: 16,
        padding: 10
      }}>{message}</Text>
    </View>
  }
}