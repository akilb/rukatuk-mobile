import React, { Component } from 'react';
import {
  StyleSheet,
  ListView,
  Text,
  View
} from 'react-native';

export default class EventsScreen extends Component {
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
    this.props.fetchRemoteEvents()
      .then(events => {
        this.setState({
          eventsDataSource: this.state.eventsDataSource.cloneWithRows(events)
        });
      })
      .done();
  }

  render() {
    if (!this.state.eventsDataSource.getRowCount()) {
      return (
        <View style={styles.container}>
          <Text>Loading..</Text>
        </View>
      );
    }

    return (
      <ListView
        dataSource={this.state.eventsDataSource}
        renderRow={(event) => <Text>{event.name}</Text>}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});