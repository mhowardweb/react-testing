import commentsReducer from 'reducers/comments';
import { SAVE_COMMENT } from 'actions/types';

it('handles actions of type SAVE_COMMENT', () => {
  // create a dummy action
  const action = {
    type: SAVE_COMMENT,
    payload: 'New Comment'
  };

  // dispatch dummy action to reducer
  const newState = commentsReducer([], action);

  // expect store state to equal 'New Comment'
  expect(newState).toEqual(['New Comment']);
});

it('handles action with unknown type', () => {
  // dispatch dummy type that does not exist
  const newState = commentsReducer([], { type: 'LIFKGFKD' });

  // expect store state to equal empty
  expect(newState).toEqual([]);
});