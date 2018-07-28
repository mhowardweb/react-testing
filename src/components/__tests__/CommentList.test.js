import React from 'react';
import { mount } from 'enzyme';

import CommentList from 'components/CommentList';
import Root from 'Root';

let component;

beforeEach(() => {
  // comments data for initial state of redux store for testing
  const initialState = {
    comments: ['Comment 1', 'Comment 2']
  };

  // use initialState to initialise redux store with data for testing
  component = mount(
    <Root initialState={initialState}> 
      <CommentList />
    </Root>
  );
});

it('creates one LI per comment', () => {
  // expect component to have 2 li tags
  expect(component.find('li').length).toEqual(2);
});

it('shows the text for each comment', () => {
  expect(component.render().text()).toContain('Comment 1');
  expect(component.render().text()).toContain('Comment 2');
});