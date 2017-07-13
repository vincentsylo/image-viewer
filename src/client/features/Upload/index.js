import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Container from 'client/common/Container';
import TextInput from 'client/common/TextInput';
import { uploadImage } from 'client/stores/images';
import styles from './Upload.css';

@withRouter
@connect()
export default class Upload extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    history: PropTypes.shape({
      push: PropTypes.func,
    }).isRequired,
  };

  state = {
    name: '',
    image: '',
    code: '',
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { dispatch, history } = this.props;
    const { name, image, code } = this.state;

    dispatch(uploadImage({ name, image, code }));
    history.push('/');
  };

  render() {
    const { name, image, code } = this.state;

    return (
      <Container title="Upload a new image">
        <form className={styles.form} onSubmit={this.onSubmit}>
          <TextInput
            label="Product name"
            id="name"
            placeholder="Enter product name. Minimum of 10 characters."
            minLength="10"
            required
            value={name}
            onChange={e => this.setState({ name: e.target.value })}
          />
          <TextInput
            label="Image URL"
            id="image"
            placeholder="Enter image URL. Must begin with http."
            required
            pattern="^([hH][tT][tT][pP]).*$"
            title="Image URL must begin with http."
            value={image}
            onChange={e => this.setState({ image: e.target.value })}
          />
          <TextInput
            label="Code"
            id="code"
            placeholder="Enter code"
            value={code}
            onChange={e => this.setState({ code: e.target.value })}
          />
          <div className={styles.submit}>
            <button type="submit" className={styles.submitButton}><i className="fa fa-plus" /> Upload image</button>
          </div>
        </form>
      </Container>
    );
  }
}
