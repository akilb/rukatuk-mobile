import {
  GoogleAnalyticsSettings,
  GoogleAnalyticsTracker
} from 'react-native-google-analytics-bridge';
import { settings } from '../config/settings';

GoogleAnalyticsSettings.setDispatchInterval(30);
let tracker = new GoogleAnalyticsTracker(settings.googleAnalyticsAccount);
tracker.setTrackUncaughtExceptions(true);

function trackScreenView(screenName) {
  tracker.trackScreenView(screenName);
}

function trackEvent(category, action) {
  tracker.trackEvent(category, action);
}

export { trackScreenView, trackEvent };