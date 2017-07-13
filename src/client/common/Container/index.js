import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './Container.css';

export default class Container extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
    className: PropTypes.string,
    subtitle: PropTypes.string,
  };

  static defaultProps = {
    className: null,
    subtitle: null,
  };

  render() {
    const { children, title, className, subtitle } = this.props;

    return (
      <div className={cx(styles.root, className)}>
        <div className={styles.header}>
          <span className={styles.title}>{title}</span>
          { subtitle ? <span className={styles.subtitle}>{subtitle}</span> : null }
        </div>
        {children}
      </div>
    );
  }
}
