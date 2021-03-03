import { shopTypes } from '../types';

export const categorySelected = (category) => (dispatch) => {
  dispatch({
    type: shopTypes.SHOW_CATEGORY_SELECTED,
    payload: category
  })
}