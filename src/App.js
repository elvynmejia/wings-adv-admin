import React from 'react';
import { Admin, Resource } from 'react-admin';
import restProvider from 'ra-data-simple-rest';

const API_ROOT = "https://wings-adv.herokuapp.com"; //https://wings-adv.herokuapp.com
const EMAIL = "admin@wings.com";
const PASSWORD = "mypasswordxyz";

const HEADERS = {
  "Content-Type": "application/json",
  Accept: "application/json",
  "X-Wings-Mode": "test"
};

const App = () => (
  <Admin dataProvider={restProvider(API_ROOT)}>
    {/*
    <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon}/>
    */}
  </Admin>
);

export default App;
