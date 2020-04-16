import React from "react";
import { Admin, Resource } from "react-admin";
import restProvider from "ra-data-simple-rest";
import LoginPage from "./pages/login";
import authProvider from "./auth_provider";

import { API_ROOT } from './constants';

const App = () => (
  <Admin
    dataProvider={restProvider(API_ROOT)}
    loginPage={LoginPage}
    authProvider={authProvider}
  >
    {/*
    <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon}/>
    */}
  </Admin>
);

export default App;
