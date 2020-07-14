import React from 'react';
import {shallow} from 'enzyme';
import SimilarCard from './SimilarCard.js'

describe('', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(< SimilarCard/>);
  });

  test('', () => {

    expect(wrapper.find("TitleHeading").text()).toContain("Similar Homes You May Like");
  })
})