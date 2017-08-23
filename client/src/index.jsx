import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './page-components/homePage.jsx';
import Login from './login/index.jsx';
import User from './page-components/userPage.jsx';
import Clan from './page-components/clanPage.jsx';
import Forum from './page-components/forumPage.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './styles.css';
/* 
Captains Log: StarDate 8/22/2017-9:50PM.
As of right now there are a few pages scaffoled with fake data. 
They are not really formatted in any way, I have just added in the 
Material-UI components, along with instructions as to how they should be
hooked up to live data. Page formatting and visual organization is not implemented. 

note: Disabled dynamic routing for testing purposes. 
*/


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
