import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import store from './redux/store';
import { theme } from './styles/theme';
import GlobalStyle from './styles/GlobalStyle';
import App from './App';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </ThemeProvider>
  </Provider>,
);
