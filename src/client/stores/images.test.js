import { IMAGE_KEYWORD_UPDATE, IMAGE_UPLOAD, updateKeyword, uploadImage } from './images';

describe('Images action', () => {
  it('should update keyword', () => {
    const keyword = 'promotion 1';
    const expectedAction = {
      type: IMAGE_KEYWORD_UPDATE,
      keyword,
    };

    expect(updateKeyword(keyword)).toEqual(expectedAction);
  });

  it('should upload image with a new id', () => {
    const newImage = {
      name: 'product 1',
      image: 'http://placehold.it/300x250&text=image 1',
      code: '',
      id: 123,
    };
    const expectedAction = {
      type: IMAGE_UPLOAD,
      newImage,
    };

    expect(uploadImage(newImage)).toEqual(expectedAction);
  });
});
