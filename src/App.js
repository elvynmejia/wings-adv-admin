import React from "react";
import { Admin, fetchUtils, Resource, List, Datagrid, TextField } from "react-admin";
import wingsDataProvider from "./wings_data_provider";
import httpClient from "./http_client";

import LoginPage from "./pages/login";
import authProvider from "./auth_provider";

import { API_ROOT, HEADERS } from './constants';

const App = () => (
  <Admin
    dataProvider={wingsDataProvider(`${API_ROOT}/admin/v1`, httpClient)}
    loginPage={LoginPage}
    authProvider={authProvider}
  >
   <Resource name="users" list={UserList}/>
  </Admin>
);

export default App;

export const UserList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="email" />
      <TextField source="role" />
    </Datagrid>
   </List>
);