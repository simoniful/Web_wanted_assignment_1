import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyle from './styles/GlobalStyle';
// import theme from './styles/theme';
// import { ThemeProvider } from 'styled-components';

ReactDOM.render(
  <>
    <GlobalStyle />
    <App />
  </>,
  document.getElementById('root'),
);
