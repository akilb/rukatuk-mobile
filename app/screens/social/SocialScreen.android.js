import React, { Component } from 'react';
import appStyles from '../../config/styles';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class SocialScreen extends Component {
  static navigatorStyle = {
    navBarHidden: true
  }

  render() {
    return (
      <View style={appStyles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
      </View>
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