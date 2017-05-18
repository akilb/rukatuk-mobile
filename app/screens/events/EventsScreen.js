import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  ListView,
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
      eventsDataSource: dataSource.cloneWithRows([])
    };
  }

  componentDidMount() {
    this.fetchEvents();
  };

  fetchEvents() {
    this.props.fetchEvents.fetchLocalEvents()
      .then(events => this.updateEvents(events))
      .then(() => this.props.fetchEvents.fetchRemoteEvents())
      .then(events => this.updateEvents(events))
      .done();
  }

  updateEvents(events) {
    this.setState({
      eventsDataSource: this.state.eventsDataSource.cloneWithRows(events)
    });
  }

  render() {
    if (!this.state.eventsDataSource.getRowCount()) {
      return (
        <View style={appStyles.container}>
          <Text>Loading..</Text>
        </View>
      );
    }

    return (
      <ListView
        style={appStyles.container}
        dataSource={this.state.eventsDataSource}
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

    //{ event.startDate | date:'EEE, dd MMM @HH:mm'}
  }
}