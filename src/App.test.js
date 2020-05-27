import { shallow } from 'enzyme';
import React from 'react';
import App from './App'; 

it('expect to render Card component', () => {
    const mockStore = {
        robots: [],
        searchField: ''
    }
    expect(shallow(<App store={mockStore}/>)).toMatchSnapshot();
})