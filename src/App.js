import React from 'react';

const API_ROOT = "https://wings-adv.herokuapp.com"; //https://wings-adv.herokuapp.com
const EMAIL = "admin@wings.com";
const PASSWORD = "mypasswordxyz";

const HEADERS = {
  "Content-Type": "application/json",
  Accept: "application/json",
  "X-Wings-Mode": "test"
};

const App = () => <h1>Wings Admin </h1>;

export default App;
