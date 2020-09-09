import React from 'react';
import ReactDOM from 'react-dom';
import CountrySelector from './countrySelector';

it('renders without crashing' , () => {
  const div = document.createElement('div');
  ReactDOM.render(<CountrySelector />, div);
  ReactDOM.unmountComponentAtNode(div);
} 
);