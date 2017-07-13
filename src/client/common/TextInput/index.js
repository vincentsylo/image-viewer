import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './TextInput.css';

export default class TextInput extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string,
    required: PropTypes.bool,
    icon: PropTypes.string,
  };

  static defaultProps = {
    required: false,
    label: null,
    icon: null,
  };

  state = {
    value: '',
  };

  onChange = (e) => {
    const { value } = e.target;

    this.setState({ value });
  };

  render() {
    const { id, label, required, icon, ...rest } = this.props;
    const { value } = this.state;

    const requiredClassName = cx(
      styles.icon,
      styles.required,
      {
        [styles.hasIcon]: icon,
      },
      'fa fa-asterisk',
    );
    const iconClassName = cx(styles.icon, icon);

    return (
      <div className={styles.root}>
        { label ? <label htmlFor={id} className={styles.label}>{label}</label> : null }
        <input type="text" id={id} className={styles.input} value={value} onChange={this.onChange} required={required} {...rest} />
        { required ? <span className={requiredClassName} /> : null }
        { icon ? <span className={iconClassName} /> : null }
      </div>
    );
  }
}
