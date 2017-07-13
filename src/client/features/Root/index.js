import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Home from '../Home';
import Upload from '../Upload';
import NotFound from '../NotFound';
import styles from './Root.css';

export default class Root extends Component {
  render() {
    return (
      <div className={styles.root}>
        <header className={styles.header}>
          <nav className={styles.navigation}>
            <Link to="/" className={styles.title}><h1>Image Viewer</h1></Link>
            <Link to="/upload" className={styles.upload}><i className="fa fa-plus" /> Upload</Link>
          </nav>
        </header>

        <div className={styles.content}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/upload" component={Upload} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    );
  }
}
