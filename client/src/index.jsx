import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pageComponents/HomePage.jsx';
import { Provider } from 'react-redux';
import configureStore from './configureStore.js';
import Login from './pageComponents/LoginPage.jsx';
import User from './pageComponents/UserPage.jsx';
import Clan from './pageComponents/ClanPage.jsx';
import Forum from './pageComponents/ForumPage.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import NavBar from './components/Nav.jsx';
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

Captains Log: StarDate 8/24/2017-3:00PM.

Adding in the darkbase theme to everthing seems to conflict with the AutoComplete components.
As of right now, I'm not adding this to our app. At a later time this may be worth revisiting.
I have some serious concerns about our page looking pretty sparse at this point.

Captains Log: Stardate 8/25/2017-11-25AM.

Going to rewrite components as I have more clarity today about how we are going to implement redux. 


*/


let store = configureStore();

const App = () => (
  <div>
    <NavBar />
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
ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MuiThemeProvider>
  </Provider>
, document.getElementById('root') || document.createElement('div'))

export default App
