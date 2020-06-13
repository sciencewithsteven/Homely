import React from 'react';
import {shallow} from 'enzyme';
import App from './App';
import SimilarFavorite from './SimilarFavorite.js';

describe('General testing description', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<SimilarFavorite />);
  });

  test('Some test description', () => {

    expect(wrapper.find("HeartFirstImg").text()).toContain("This is a counter app");
  });

  test('Some description about clicking', () => {

    wrapper.find("RedHeartFirstImg").simulate("click");
    expect(wrapper.find("#counter-Value").text()).toBe("1");
  });
})