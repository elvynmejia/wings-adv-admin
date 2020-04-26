import React from 'react';
import { Admin, Resource } from 'react-admin';
import wingsDataProvider from './wings_data_provider';
import httpClient from "./http_client";

import LoginPage from './pages/login';
import authProvider from './auth_provider';

import { API_ROOT } from './constants';

import UserList from './pages/user/list';
import UserShow from './pages/user/show';

const API_URL = `${API_ROOT}/admin/v1`;

const App = () => (
  <Admin
    dataProvider={wingsDataProvider(API_URL, httpClient)}
    loginPage={LoginPage}
    authProvider={authProvider}
  >
   <Resource name="users" list={UserList} show={UserShow} />
  </Admin>
);

export default App;
