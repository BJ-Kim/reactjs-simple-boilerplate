import React                   from 'react';
import ReactDOM                from 'react-dom';
import MainPage                from './MainPage';
import history                 from '../util/history';
import AuthAction              from '../actions/AuthAction';
import AuthStore               from '../stores/AuthStore';
import {
  Router,
  Route,
  Link,
  History
} from 'react-router';

class App {
  render(element) {
    ReactDOM.render((
      <div>
        <Router history={history}>
          <Route path="/"                  component={MainPage} />
        </Router>
      </div>
    ), element);
  }
}

export default App;
