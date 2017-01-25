import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Route, Router, IndexRoute, browserHistory } from 'react-router';
import reduxThunk from 'redux-thunk';

import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import App from './App';
import Signin from './components/auth/Signin';
import reducers from './reducers/index';
import './index.css';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
injectTapEventPlugin();

ReactDOM.render(
  <MuiThemeProvider muiTheme={ getMuiTheme() }>
    <Provider store={ createStoreWithMiddleware(reducers) }>
      <Router history={ browserHistory }>
        <Route path="/" component={ App }>
          <Route path="signin" component={ Signin } />
        </Route>
      </Router>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
);
