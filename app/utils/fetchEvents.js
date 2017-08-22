import { settings } from '../config/settings';
import * as storage from './storage';

function fetchRemoteEvents() {
  const eventsUrl = settings.rukatukApiUrl + '/events';

  return fetch(eventsUrl)
    .then((response) => response.json())
    .then((events) => {
      return storage.saveEvents(events)
        .then(() => events);
    });
}

function fetchLocalEvents() {
  return storage.getEvents();
}

export { fetchRemoteEvents, fetchLocalEvents };
