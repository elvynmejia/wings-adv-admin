import React from "react";
import {
  List,
  Datagrid,
  ShowButton,
} from "react-admin";

import attributes from "components/attributes";

const UserList = (props) => (
  <List
    {...props}
    title="List of Users"
    bulkActionButtons={false}
    sortable={false}
    exporter={false}
  >
    <Datagrid isRowSelectable={() => false}>
      {attributes()}
      <ShowButton />
    </Datagrid>
  </List>
);

export default UserList;