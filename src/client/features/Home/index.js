import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _ from 'lodash';
import Container from 'client/common/Container';
import TextInput from 'client/common/TextInput';
import { updateKeyword } from 'client/stores/images';
import styles from './Home.css';

@connect(state => ({ images: state.images }))
export default class Home extends Component {
  static propTypes = {
    images: PropTypes.shape({
      keyword: PropTypes.string,
      collection: PropTypes.array,
    }).isRequired,
    dispatch: PropTypes.func.isRequired,
  };

  images = [];

  clearSearch = (e) => {
    e.preventDefault();
    const { dispatch } = this.props;

    dispatch(updateKeyword(''));
  };

  render() {
    const { images, dispatch } = this.props;
    const { collection, keyword } = images;

    const filteredImages = _.filter(collection, image => _.includes(image.code, keyword));

    return (
      <div className={styles.root}>
        <div className={styles.searchContainer}>
          <TextInput id="search" placeholder="Search image codes" icon="fa fa-search" value={keyword} onChange={e => dispatch(updateKeyword(e.target.value))} />
        </div>
        <div className={styles.images}>
          {
            filteredImages.length > 0 ? _.map(filteredImages, image => (
              <Container key={image.id} title={image.name} subtitle={image.code} className={styles.container}>
                <img
                  ref={(ref) => { this.images[image.id] = ref; }}
                  src={image.image}
                  alt={image.name}
                  className={styles.image}
                  onError={() => { this.images[image.id].src = 'http://placehold.it/300x250&text=Not found'; }}
                />
              </Container>
            )) : (
              <button onClick={this.clearSearch} className={styles.clear}>No images found. Clear your search criteria?</button>
            )
          }
        </div>
      </div>
    );
  }
}
