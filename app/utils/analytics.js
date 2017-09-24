import {
  GoogleAnalyticsSettings,
  GoogleAnalyticsTracker
} from 'react-native-google-analytics-bridge';
import firebase from './firebase';
import { settings } from '../config/settings';

const analytics = firebase.analytics();
analytics.setAnalyticsCollectionEnabled(true);

GoogleAnalyticsSettings.setDispatchInterval(30);
let tracker = new GoogleAnalyticsTracker(settings.googleAnalyticsAccount);
tracker.setTrackUncaughtExceptions(true);

function trackScreenView(screenName) {
  tracker.trackScreenView(screenName);
  analytics.setCurrentScreen(screenName);
}

function trackEvent(event, params) {
  analytics.logEvent(event, params);
}

export { trackScreenView, trackEvent };