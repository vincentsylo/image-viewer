import React, { Component } from 'react';
import Container from 'client/common/Container';
import TextInput from 'client/common/TextInput';
import styles from './Upload.css';

export default class Upload extends Component {
  render() {
    return (
      <Container title="Upload a new image">
        <form className={styles.form}>
          <TextInput label="Product name" id="name" placeholder="Enter product name" required minLength="11" />
          <TextInput label="Image URL" id="image" placeholder="Enter image url" required pattern="^http" title="Image URL must begin with http." />
          <TextInput label="Code" id="code" placeholder="Enter code" />
          <div className={styles.submit}>
            <button type="submit" className={styles.submitButton}><i className="fa fa-plus" /> Upload image</button>
          </div>
        </form>
      </Container>
    );
  }
}
