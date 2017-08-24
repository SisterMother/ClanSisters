import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'redux';
import configureStore from './configureStore.js';
import Home from './pageComponents/homePage.jsx';
import Login from './login/index.jsx';
import User from './pageComponents/UserPage.jsx';
import Clan from './pageComponents/ClanPage.jsx';
import Forum from './pageComponents/ForumPage.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './styles.css';
/*
Captains Log: StarDate 8/22/2017-9:50PM.
As of right now there are a few pages scaffoled with fake data.
They are not really formatted in any way, I have just added in the
Material-UI components, along with instructions as to how they should be
hooked up to live data. Page formatting and visual organization is not implemented.
Doing css styling is merely cosmetic and can be added later after we get functional.

note: Disabled dynamic routing for testing purposes.

Captains Log: StarDate 8/23/2017-3:36PM.
Scaffolding progress is probably about 2/3 finished. The clans and forum pages still need to
be added. I am quite happy with the way that the material-ui looks so far, but I do think
that the forum page might need a different ui, as I'm not sure that there's really a good
material-ui component for this.
*/


let store = configureStore();
console.log('store: ', store.getState());

const App = () => (
  <div>
      <Switch>
        <Route exact path = '/' >
          <Home />
        </Route>
        <Route exact path = '/login' >
          <Login />
        </Route>
        <Route exact path = '/user' >
          <User />
        </Route>
        <Route exact path = '/clan' >
        <Clan />
        </Route>
        <Route exact path ='/forum' >
        <Forum />
        </Route>
      </Switch>
  </div>
)

/** Render App using React Router. */
ReactDOM.render((
  <MuiThemeProvider>    
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </MuiThemeProvider>
), document.getElementById('root'));
