import { settings } from '../config/settings';

function fetchRemoteEvents() {
  const eventsUrl = settings.rukatukApiUrl + '/events';

  return fetch(eventsUrl)
    .then((response) => response.json());
}

export { fetchRemoteEvents };
