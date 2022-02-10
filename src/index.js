// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './Components/App/App';
// import './index.css';

// eslint-disable-next-line react/jsx-filename-extension

// ReactDOM.render(
//   <App />, document.getElementById('root'),
// );

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './Components/App/App';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root'),
);
