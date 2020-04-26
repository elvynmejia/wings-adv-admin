import React, { Fragment } from "react";
import {
  List,
  Datagrid,
  ShowButton,
} from "react-admin";

import attributes from "components/attributes";
import VerifyButton from "./verify";

const UserList = (props) => (
  <Fragment>
    <List
      {...props}
      title="List of Users"
      bulkActionButtons={false}
      sortable={false}
      exporter={false}
      pagination={false}
    >
      <Datagrid isRowSelectable={() => false}>
        {attributes()}
        <ShowButton />
        <VerifyButton source={"verified"} label="" resource="users" />
      </Datagrid>
    </List>
  </Fragment>
);

export default UserList;