const initialState = {
  currentValue: 0,
  futureValue: [],
  previousValue: [],
};
//action types
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const UNDO = 'UNDO';
const REDO = 'REDO';

//action creators
export function increment(amount) {
  return {
    type: INCREMENT,
    amount,
  };
}
export function decrement(amount) {
  return {
    type: DECREMENT,
    amount,
  };
}
export function undo() {
  return {
    type: UNDO,
  };
}
export function redo() {
  return {
    type: REDO,
  };
}

//reducer
export default function counter(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        currentValue: state.currentValue + action.amount,
        futureValue: [],
        previousValue: [state.currentValue, ...state.previousValue],
      };
    case DECREMENT:
      return {
        currentValue: state.currentValue - action.amount,
        futureValue: [],
        previousValue: [state.currentValue, ...state.previousValue],
      };
    case UNDO:
      return {
        currentValue: state.previousValue[0],
        futureValue: [state.currentValue, ...state.futureValue],
        previousValue: state.previousValue.slice(1),
      };
    case REDO:
      return {
        currentValue: state.futureValue[0],
        futureValue: state.futureValue.slice(1),
        previousValue: [state.currentValue, ...state.previousValue],
      };
    default:
      return state;
  }
}
