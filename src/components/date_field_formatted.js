import React from 'react';
import { FunctionField } from 'react-admin';
import parseAndFormatDate from 'utils';

const DateFieldFormatted = (props) => {
  const { source } = props;
  return (
    <FunctionField
      {...props}
      render={(record) => parseAndFormatDate(record[source])}
    />
  );
};

export default DateFieldFormatted;