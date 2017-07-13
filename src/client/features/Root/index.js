import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../Home';
import NotFound from '../NotFound';
import styles from './Root.css';

export default class Root extends Component {
  render() {
    return (
      <div className={styles.root}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}
