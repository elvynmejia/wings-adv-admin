import React from "react";
import { List, Datagrid, TextField } from "react-admin";
import BoolField from "components/bool_field";
import DateFieldFormatted from "components/date_field_formatted";
import READABLE_FIELDS from "pages/view_schemas/user";
import TEXT_FIELD_TYPES from "pages/view_schemas/text_field_types";

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
