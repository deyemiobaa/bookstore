const STATUS = 'bookstore/categories/STATUS';

const initialState = [];
const CategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case STATUS: {
      return 'Page Under Construction';
    }
    default: {
      return state;
    }
  }
};

export const status = () => ({ type: STATUS });

export default CategoryReducer;
