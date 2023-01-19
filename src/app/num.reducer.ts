import { createReducer, on } from '@ngrx/store';
import { decrement, increment, reset } from './num.actions';

const initial = 1;

const _numReducer = createReducer(
  initial,
  on(increment, (state) => state * 2),
  on(decrement, (state) => state / 2),
  on(reset, (state) => 100)
);

export function numReducer(state, action) {
  return _numReducer(state, action);
}
