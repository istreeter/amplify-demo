import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Amplify } from 'aws-amplify';
import * as serviceWorker from './serviceWorker';

Amplify.configure({
  Auth: {
    region: 'eu-central-1',
    userPoolId: process.env.REACT_APP_USER_POOL_ID,
    userPoolWebClientId: process.env.REACT_APP_USER_POOL_WEB_CLIENT_ID,
    oauth: {
      domain: process.env.REACT_APP_OAUTH_DOMAIN,
      scope: ['openid', 'aws.cognito.signin.user.admin'],
      redirectSignIn: 'http://localhost:3000',
      redirectSignOut: 'http://localhost:3000',
      responseType: 'code',
    },
  }
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
