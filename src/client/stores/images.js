import uuid from 'uuid';

export const initialState = {
  keyword: '',
  collection: [{
    id: 1,
    name: 'product 1',
    image: 'http://placehold.it/300x250&text=image 1',
    code: '',
  }, {
    id: 2,
    name: 'product 2',
    image: 'http://placehold.it/300x250&text=image 2',
    code: 'promo 1',
  }],
};

const IMAGE_KEYWORD_UPDATE = 'IMAGE_KEYWORD_UPDATE';
const IMAGE_UPLOAD = 'IMAGE_UPLOAD';

export default function images(state = initialState, action) {
  switch (action.type) {
    case IMAGE_KEYWORD_UPDATE:
      return {
        ...state,
        keyword: action.keyword,
      };

    case IMAGE_UPLOAD:
      return {
        ...state,
        collection: [
          ...state.collection || [],
          action.newImage,
        ],
      };

    default:
      return state;
  }
}

export function updateKeyword(keyword) {
  return {
    type: IMAGE_KEYWORD_UPDATE,
    keyword,
  };
}

export function uploadImage(newImage) {
  return {
    type: IMAGE_UPLOAD,
    newImage: {
      ...newImage,
      id: uuid.v4(),
    },
  };
}
