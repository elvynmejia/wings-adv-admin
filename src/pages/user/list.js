import React from "react";
import Chip from "@material-ui/core/Chip";

import { List, Datagrid, TextField, FunctionField } from "react-admin";

import parseAndFormatDate from "utils";

const TEXT_FIELD_TYPES = {
  textField: "text",
  bool: "bool",
  date: "date",
};

const BoolField = (props) => {
  const displayChip = (record) => {
    return record[props.source] ? (
      <Chip label="true" color="secondary" />
    ) : (
      <Chip label="false" color="primary" />
    );
  };

  return <FunctionField {...props} render={(record) => displayChip(record)} />;
};

const READABLE_FIELDS = {
  id: {
    type: TEXT_FIELD_TYPES.textField,
    sortable: false,
  },
  first_name: {
    type: TEXT_FIELD_TYPES.textField,
    sortable: false,
  },
  last_name: {
    type: TEXT_FIELD_TYPES.textField,
    sortable: false,
  },
  email: {
    type: TEXT_FIELD_TYPES.textField,
    sortable: false,
  },
  role: {
    type: TEXT_FIELD_TYPES.textField,
    sortable: false,
  },
  verified: {
    type: TEXT_FIELD_TYPES.bool,
    sortable: false,
  },
  created_at: {
    type: TEXT_FIELD_TYPES.date,
    sortable: false,
  },
};

const DateFieldFormatted = (props) => {
  const { source } = props;
  return (
    <FunctionField
      {...props}
      render={(record) => parseAndFormatDate(record[source])}
    />
  );
};

const UserList = (props) => (
  <List
    {...props}
    title="List of Users"
    bulkActionButtons={false}
    sortable={false}
  >
    <Datagrid isRowSelectable={() => false}>
      {Object.keys(READABLE_FIELDS).map((key) => {
        const { type, sortable } = READABLE_FIELDS[key];
        if (type === TEXT_FIELD_TYPES.bool) {
          return <BoolField source={key} sortable={sortable} />;
        } else if (type === TEXT_FIELD_TYPES.date) {
          return <DateFieldFormatted source={key} sortable={sortable} />;
        }
        return <TextField source={key} sortable={sortable} />;
      })}
    </Datagrid>
  </List>
);

export default UserList;
