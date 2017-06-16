import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import Timer from 'react-native-timer';

import appStyles, { theme, navigatorStyle } from '../../config/styles';
import styles from './styles';

export default class Countdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      days: "--",
      hours: "--",
      minutes: "--",
      seconds: "--"
    };
  }

  componentDidMount() {
    let self = this;
    Timer.setInterval(
      'tick',
      () => this.updateTimeRemaining(self),
      1000);
  }

  componentWillUnmount() {
    Timer.clearInterval('tick');
  }

  updateTimeRemaining(self) {
    const totalNumberOfMilliSeconds = self.props.date.getTime() - new Date().getTime();
    var remainingSeconds = Math.abs(totalNumberOfMilliSeconds / 1000);

    let dayCount = Math.floor(remainingSeconds / 86400);
    remainingSeconds -= (dayCount * 86400);
    let hourCount = Math.floor(remainingSeconds / 3600) % 24;
    remainingSeconds -= (hourCount * 3600);
    let minuteCount = Math.floor(remainingSeconds / 60) % 60;
    remainingSeconds -= minuteCount * 60;
    let secondCount = Math.floor(remainingSeconds);

    self.setState({
      days: dayCount,
      hours: hourCount,
      minutes: minuteCount,
      seconds: secondCount
    });
  }

  render() {
    let padLeft = (number) => {
      return ((number >= 10 || number == "--")
        ? number
        : "0" + number.toString());
    };
    return (
      <View style={[appStyles.card, styles.countdownContainer]}>
        <View style={{flex: 1}}>
          <Text style={{
            textAlign: 'center',
            color: theme.colours.light,
            fontSize: 13,
            fontWeight: 'bold',
            paddingBottom: 6
          }}>COUNTDOWN TO NEXT EVENT</Text>
        </View>
        <View style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-around'
        }}>
          <View style={styles.digitContainer}>
            <View style={styles.digitScreen}>
              <Text style={styles.digitValue}>{padLeft(this.state.days)}</Text>
            </View>
            <Text style={styles.digitLabel}>DAYS</Text>
          </View>

          <View style={styles.digitContainer}>
            <View style={styles.digitScreen}>
              <Text style={styles.digitValue}>{padLeft(this.state.hours)}</Text>
            </View>
            <Text style={styles.digitLabel}>HOURS</Text>
          </View>

          <View style={styles.digitContainer}>
            <View style={styles.digitScreen}>
              <Text style={styles.digitValue}>{padLeft(this.state.minutes)}</Text>
            </View>
            <Text style={styles.digitLabel}>MINUTES</Text>
          </View>

          <View style={styles.digitContainer}>
            <View style={styles.digitScreen}>
              <Text style={styles.digitValue}>{padLeft(this.state.seconds)}</Text>
            </View>
            <Text style={styles.digitLabel}>SECONDS</Text>
          </View>
        </View>
      </View>
    )
  }
}