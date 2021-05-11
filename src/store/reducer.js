import { INCREMENT, DECREMENT, INCREMENT_BY_AMOUNT } from './action';

// var user = {name: "partab", email: "partabraj@hotmail.com"}

// var newUser = {...user, name: "zia khan", age: 24}

const initialState = {
  counter: 0,
};

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT: {
      return { ...state, counter: state.counter + 1 };
    }

    case DECREMENT: {
      return { ...state, counter: state.counter - 1 };
    }

    case INCREMENT_BY_AMOUNT: {
      return { ...state, counter: state.counter + action.payload };
    }

    default: {
      return state;
    }
  }
};
