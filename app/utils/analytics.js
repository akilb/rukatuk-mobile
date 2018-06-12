import Analytics from 'appcenter-analytics';

// const analytics = firebase.analytics();
// analytics.setAnalyticsCollectionEnabled(true);

function trackScreenView(screenName, properties) {
  Analytics.trackEvent('Screen View - ' + screenName, properties);
}

function trackEvent(event, properties) {
  Analytics.trackEvent(event, properties);
}

export { trackScreenView, trackEvent };