import React, { Component } from 'react';
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  ListView,
  RefreshControl,
  ScrollView,
  Text,
  View
} from 'react-native';
import Moment from 'moment';

import appStyles, { theme, navigatorStyle } from '../../config/styles';

export default class EventsScreen extends Component {
  static navigatorStyle = navigatorStyle

  constructor(props) {
    super(props);

    var dataSource = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      loading: false,
      refreshing: false,
      isError: false,
      eventsDataSource: dataSource.cloneWithRows([])
    };
  }

  componentDidMount() {
    this.fetchEvents();
  };

  _onRefresh() {
    this.setState({ refreshing: true });

    this.fetchEvents();
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
    this.setState({
      loading: false,
      refreshing: false,
      isError: false,
      eventsDataSource: this.state.eventsDataSource.cloneWithRows(events)
    });
  }

  render() {
    if (!this.state.eventsDataSource.getRowCount() &&
        !this.state.refreshing &&
        this.state.loading) {
      return (
        <View style={[{alignItems: 'center', justifyContent: 'center'}, appStyles.container]}>
          <ActivityIndicator animating={true} size='large' />
        </View>
      );
    }

    var refreshControl = (<RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={this._onRefresh.bind(this)} />);
    if (!this.state.eventsDataSource.getRowCount() && this.state.isError) {
      return (
        <ScrollView
          style={appStyles.container}
          refreshControl={refreshControl}>
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
      <ListView
        style={appStyles.container}
        dataSource={this.state.eventsDataSource}
        refreshControl={refreshControl}
        renderRow={(event) => this.renderEventRow(event)}
        />
    );
  }

  renderEventRow(event) {
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