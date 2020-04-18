import React from "react";
import { List, Datagrid, TextField, BooleanField } from "react-admin";

const TEXT_FIELD_TYPES = {
  textField: "TextField",
  bool: "BooleanField",
};

const READABLE_FIELDS = {
  id: {
    type: TEXT_FIELD_TYPES.textField,
    sortable: false,
    componet: null,
  },
  first_name: {
    type: TEXT_FIELD_TYPES.textField,
    sortable: false,
    componet: null,
  },
  last_name: {
    type: TEXT_FIELD_TYPES.textField,
    sortable: false,
    componet: null,
  },
  email: {
    type: TEXT_FIELD_TYPES.textField,
    sortable: false,
    componet: null,
  },
  role: {
    type: TEXT_FIELD_TYPES.textField,
    sortable: false,
    componet: null,
  },
  verified: {
    type: TEXT_FIELD_TYPES.bool,
    sortable: false,
    componet: <BooleanField source="verified" sortable={false} />,
  },
  created_at: {
    type: TEXT_FIELD_TYPES.textField,
    sortable: false,
    componet: null,
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
        const { componet, sortable } = READABLE_FIELDS[key];
        return componet ? (
          componet
        ) : (
          <TextField source={key} sortable={sortable} />
        );
      })}
    </Datagrid>
  </List>
);

export default UserList;
