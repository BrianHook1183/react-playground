import React from 'react';
import ReactDOM from 'react-dom';
import demonymApp from './demonymApp';

it('renders without crashing' , () => {
  const div = document.createElement('div')
  ReactDOM.render(<demonymApp />, div);
  ReactDOM.unmountComponentAtNode(div);
  });