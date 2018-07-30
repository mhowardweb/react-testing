import React from 'react';
import moxios from 'moxios'; //fake axios response
import { mount } from 'enzyme'; //Full DOM
import Root from 'Root';
import App from 'components/App';

beforeEach(() => {
  moxios.install();
  // given axios API endpint, use moxios to fake the endpoint and return fake response
  // moxios causes a small delay in the response, which can cause test to fail
  moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
    status: 200,
    response: [{ name: 'Fetched #1' }, { name: 'Fetched #2 '}]
  });

});

afterEach(() => {
  moxios.uninstall();
});

// callback 'done' tells Jest to wait until done is called, then Jest completes the test
it('can fetch a list of comments and display them', (done) => {
  // Attempt to render the entire app
  const component = mount(
    <Root>
      <App />
    </Root>
  );

  // find the 'fetchComments' button and click it
  // execute network request (axios)
  component.find('.fetch-comments').simulate('click');
  
  
  // introduce a TINY little pause using setTimeout
  moxios.wait(() => {
    //update app after network request
    component.update();
    // expect to find a list of comments
    expect(component.find('li').length).toEqual(2);
    // Tell Jest the test is done.
    done();
    component.unmount();
  });
});
