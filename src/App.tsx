import React from 'react';
import {Switch, Route, Link} from 'react-router-dom'

import Amplify from 'aws-amplify'
import config from './aws-exports'
import { AmplifyAuthenticator, AmplifySignIn, AmplifySignOut } from '@aws-amplify/ui-react';

import Splash from './views/Splash';
import Dashboard from './views/Dashboard';

import './App.css';

Amplify.configure(config)

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/'>
          <Splash />
        </Route>
        <AmplifyAuthenticator >
        <nav className="flex justify-end items-center bg-black">
            <Link to="/dashboard" className="text-white mx-4 hover:text-yellow-500">Dash</Link>
            <AmplifySignOut />
          </nav>
        <Route path='/dashboard'>
          <Dashboard />
        </Route>
        </AmplifyAuthenticator>
      </Switch>
    </div>
  );
}

export default App;
