import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './TextInput.css';

export default class TextInput extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    required: PropTypes.bool,
  };

  static defaultProps = {
    required: false,
  };

  state = {
    value: '',
  };

  onChange = (e) => {
    const { value } = e.target;

    this.setState({ value });
  };

  render() {
    const { id, label, required, ...rest } = this.props;
    const { value } = this.state;

    return (
      <div className={styles.root}>
        <label htmlFor={id} className={styles.label}>{label}</label>
        <input type="text" id={id} className={styles.input} value={value} onChange={this.onChange} {...rest} />
        { required ? <span className={cx(styles.requiredIcon, 'fa fa-asterisk')} /> : null }
      </div>
    );
  }
}
