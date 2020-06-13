import React from 'react';
import {shallow} from 'enzyme';
import App from './App';
import SimilarButtons from './SimilarButtons.js';

describe('General testing description', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<SimilarButtons />);
  });

  test('Some test description', () => {

    expect(wrapper.find("SimilarPreviousContainer").text()).toContain("This is a counter app");
  });

  test('Some description about clicking', () => {

    wrapper.find("SimilarPreviousContainer").simulate("click");

    expect(shallow(<App />).find("this.state.similarCard").text()).toBe("1");
  });
})