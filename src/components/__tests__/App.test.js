import React from 'react';
import { shallow } from 'enzyme';
import App from 'components/App';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

let wrapped; // outer scope, can be used in all functions below.

// Used in every test within this file, applied to each test.
beforeEach(() => {
  wrapped = shallow(<App />);
});

it ('shows a comment box', () => {
  expect(wrapped.find(CommentBox).length).toEqual(1);
  
});

it ('shows a comment list', () => {
  expect(wrapped.find(CommentList).length).toEqual(1);
});
