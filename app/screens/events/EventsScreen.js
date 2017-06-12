import React, { Component } from 'react';
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  RefreshControl,
  ScrollView,
  SectionList,
  Text,
  View
} from 'react-native';
import Moment from 'moment';

import appStyles, { theme, navigatorStyle } from '../../config/styles';

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
    this.fetchEvents();
  };

  _onRefresh(self) {
    self.setState({ refreshing: true });

    self.fetchEvents();
  }

  fetchEvents() {
    this.setState({ loading: true });

    this.props.fetchEvents.fetchLocalEvents()
      .then(events => this.updateEvents(events))
      .then(() => this.props.fetchEvents.fetchRemoteEvents())
      .then(events => this.updateEvents(events))
      .catch(err => {
        console.log(err);
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
    if (!this.state.upcomingEvents.length &&
        !this.state.pastEvents.length &&
        !this.state.refreshing &&
        this.state.loading) {
      return (
        <View style={[{alignItems: 'center', justifyContent: 'center'}, appStyles.container]}>
          <ActivityIndicator animating={true} size='large' />
        </View>
      );
    }

    if (!this.state.upcomingEvents.length &&
        !this.state.pastEvents.length &&
        this.state.isError) {
      return (
        <ScrollView
          style={appStyles.container}
          refreshing={this.state.refreshing}
          onRefresh={() => this._onRefresh(this)}>
          <View style={[{
            height: 80,
            alignItems: 'center',
            justifyContent: 'center'
          }, appStyles.card]}>
            <Text style={{
              color: theme.colours.light,
              fontSize: 16,
              padding: 10
            }}>
              Oops! We couldn't load events. Pull on this card to try again.
            </Text>
          </View>
        </ScrollView>
      );
    }

    return (
      <SectionList
        style={appStyles.container}
        renderItem={this.renderEventRow}
        keyExtractor={(event) => event.id}
        refreshing={this.state.refreshing}
        onRefresh={() => this._onRefresh(this)}
        sections={[
          { key: 'Upcoming', data: this.state.upcomingEvents },
          { key: 'Past', data: this.state.pastEvents }
        ]}
      />
    );
  }

  renderEventRow(row) {
    let event = row.item;
    return (
      <View style={appStyles.card}>
        <Image
          source={{ uri: event.imageUrl }}
          resizeMode='cover'
          style = {{
            flex: 1,
            height: 210,
            width: undefined
          }} >
        </Image>
        <View style={{ padding: 10 }}>
          <Text style={{
            color: theme.colours.light,
            fontSize: 18,
            fontWeight: 'bold'
          }}>
            {event.name}
          </Text>
          <Text style={{
            color: '#666666',
            paddingTop: 3
          }}>{event.venue.name}</Text>
          <Text style={{
            color: '#666666',
            paddingTop: 1
          }}>{Moment(event.startDate).format('ddd, D MMM @HH:mm')}</Text>
        </View>
      </View>
    );
  }
}