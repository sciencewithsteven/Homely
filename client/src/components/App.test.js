import React from 'react';
import {shallow} from 'enzyme';
import App from './App';


it('Describe desired outcome', () => {
  const wrapper = shallow(<App />)
  const name1 = wrapper.find("h2.className")

  expect(name1).toBe("0");

  const button = wrapper.find("button");

  button.simulate("click");

  const name2 = wrapper.find("h2.total").text();

  expect(name2).toBe("1");


});

it('should render ticket name in title', () => {
  const wrapper = shallow(<App />);
  const title = wrapper.find('h2.title').text();

  expect(title).toBe('NHL Tickets');
})

it('should render header & footer', () => {
  const wrapper = shallow(<App />);
  const footer = wrapper.find(Footer); // Footer from line 5

  expect(footer.exists()).toBe(true);
});

// EXAMPLE 2 OF JEST + ENZYME

describe('General testing description', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  test('Some test description', () => {

    expect(wrapper.find("h1").text()).toContain("This is a counter app");
  });
  test('Some description about clicking', () => {
    wrapper.find("#increment-btn").simulate("click");
    expect(wrapper.find("#counter-Value").text()).toBe("1");
  })
})