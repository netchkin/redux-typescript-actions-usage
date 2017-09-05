import { createStore, Action, Dispatch, ActionCreator } from 'redux';

export interface State {
  counter: number;
}

// is not working with type inference... maybe because of type: any?
// interface IncrementAction extends Action {
//   type: 'INCREMENT';
//   incrementBy: number;
// }

// interface DecrementAction extends Action {
//   type: 'DECREMENT';
//   decrementBy: number;
// }

// works with intellisense
// type IncrementAction = {
//   type: 'INCREMENT';
//   incrementBy: number;
// };

// type DecrementAction = {
//   type: 'DECREMENT';
//   decrementBy: number;
// };

// type MyAction = IncrementAction | DecrementAction;

// works with intellisense, also
export interface IncrementAction extends Action {
  type: 'INCREMENT';
  incrementBy: number;
}

export interface DecrementAction extends Action {
  type: 'DECREMENT';
  decrementBy: number;
}

export type MyAction = IncrementAction | DecrementAction;

const reducer = (state: State = { counter: 0 }, action: MyAction) => {
  switch (action.type) {
    case 'INCREMENT': return { ...state, counter: state.counter + action.incrementBy };
    case 'DECREMENT': return { ...state, counter: state.counter + action.decrementBy };
    default: return state;
  }
};

export const store = createStore(reducer);

export const TestingActionCreators = {

};