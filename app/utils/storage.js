import { AsyncStorage } from 'react-native';

const EVENTS_KEY = 'rukatuk.events';

function getEvents() {
  return AsyncStorage.getItem(EVENTS_KEY)
    .then((eventsJson) => eventsJson ? JSON.parse(eventsJson) : []);
}

function saveEvents(events) {
  return AsyncStorage.setItem(EVENTS_KEY, JSON.stringify(events));
}

export { getEvents, saveEvents };