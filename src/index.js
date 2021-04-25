import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './index.css';
import App from './App';
import BlogPage from './BlogPage';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/BlogPage" component={BlogPage} />
    </Switch>
  </Router>
  , document.getElementById('root')
);
registerServiceWorker();
