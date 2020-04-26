import moment from 'moment';
import { isNumber } from 'lodash';

const DATE_FORMAT = 'MMMM Do, YYYY';

const parseAndFormatDate = (value = null, format = DATE_FORMAT) => {
  if (value === null) {
    return value;
  }

  let date = '';

  if (isNumber(value)) {
    date = moment.unix(value).utc();
  } else {
    date = moment(value).utc();
  }

  if (format) {
    return date.format(format);
  }

  return date;
};

export default parseAndFormatDate;
