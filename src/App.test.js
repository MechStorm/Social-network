import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";

it('renders without crashing', () => {
  const div = document.createElement('div');
  <Provider>
    <BrowserRouter>
      ReactDOM.render(<App />, div);
    </BrowserRouter>
  </Provider>
  ReactDOM.unmountComponentAtNode(div);
});
