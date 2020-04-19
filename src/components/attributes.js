import React from "react";
import {
  TextField,
  BooleanField,
  FunctionField,
} from "react-admin";

import READABLE_FIELDS from "pages/view_schemas/user";
import TEXT_FIELD_TYPES from "pages/view_schemas/text_field_types";
import parseAndFormatDate from "utils";

const attributes = () => {
  return Object.keys(READABLE_FIELDS).map((key) => {
    const { type, sortable } = READABLE_FIELDS[key];
    if (type === TEXT_FIELD_TYPES.bool) {
      return <BooleanField key={key} source={key} sortable={sortable} />;
    } else if (type === TEXT_FIELD_TYPES.date) {
      return (
        <FunctionField
          key={key}
          source={key}
          sortable={sortable}
          render={(record) => parseAndFormatDate(record[key])}
        />
      );
    }
    return <TextField key={key} source={key} sortable={sortable} />;
  });
};

export default attributes;