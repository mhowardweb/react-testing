import React from 'react';
import { mount } from 'enzyme'; //Full DOM API
import CommentBox from 'components/CommentBox';
// component is a virtual component used by enzyme
let component;

// runs before every it statement
beforeEach(() => {
  component = mount(<CommentBox />);
});

// runs after every it statement
afterEach(() => {
  component.unmount(); // unmounts the component after each test to stop DOM issues
})

it('has a text area and a button', () => {
  expect(component.find('textarea').length).toEqual(1); //find 1 textarea element
  expect(component.find('button').length).toEqual(1); //find 1 button element 

});

describe('the text area', () => { //group tests together to be able to run beforeEach code
  beforeEach(() => {
    component.find('textarea').simulate('change', { //find textarea and simulate text entry (change)
      target: { value: 'new comment' } //Mock event object
    }); // The event is change NOT onChange
    component.update(); // force component reload
  
  });

  it('has a text area that users can type in', () => {
  // expect textarea to have a new value of 'new comment'
  // prop looks at the value of textarea so that it can be tested
  expect(component.find('textarea').prop('value')).toEqual('new comment');
  });

  it('when form is submitted text area gets emptied', () => {
  // check that textarea has text in it before doing a submit test that clears the textarea
  expect(component.find('textarea').prop('value')).toEqual('new comment');
  component.find('form').simulate('submit'); //simulate submit button press
  component.update();

  // expect textarea to be empty
  expect(component.find('textarea').prop('value')).toEqual('');
  });
});