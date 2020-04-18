import React from "react";
import Chip from "@material-ui/core/Chip";

import {
  List,
  Datagrid,
  TextField,
} from "react-admin";

const TEXT_FIELD_TYPES = {
  textField: "text",
  bool: "bool",
};

const BoolField = ({ source, record }) => {
  return record[source] ? (
    <Chip label="true" color="secondary" />
  ) : (
    <Chip label="false" color="primary" />
  );
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
    type: TEXT_FIELD_TYPES.textField,
    sortable: false,
  },
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
        return type === TEXT_FIELD_TYPES.bool ? (
          <BoolField
            source={key}
            sortable={sortable}
            render={(record) => record}
          />
        ) : (
          <TextField source={key} sortable={sortable} />
        );
      })}
    </Datagrid>
  </List>
);

export default UserList;
