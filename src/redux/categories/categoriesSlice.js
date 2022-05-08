const STATUS = 'bookstore/categories/STATUS';

const initialState = [];
const CategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case STATUS: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

export const status = () => ({ type: STATUS, payload: 'Page Under Construction' });

export default CategoryReducer;
