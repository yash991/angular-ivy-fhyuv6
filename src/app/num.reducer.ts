import { createReducer, on } from '@ngrx/store';
import { decrement, increment, reset } from './num.actions';

const initial = 0;

const _numReducer = createReducer(
  initial,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(reset, (state) => 0)
);

export function numReducer(state, action) {
  return _numReducer(state, action);
}
