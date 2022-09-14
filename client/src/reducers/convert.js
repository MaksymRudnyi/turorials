import { DOWNLOAD, UPLOAD } from '../constants/actionTypes';

export default (convert = [], action) => {
  switch (action.type) {
    case DOWNLOAD:
      return action.payload;
    case UPLOAD:
      return action.payload;
    default:
      return convert;
  }
};
