import Moment from 'moment';

function formatDate(dateText, dateFormat) {
  return Moment(dateText).utcOffset(dateText).format(dateFormat);
}

export default formatDate;