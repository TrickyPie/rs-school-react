import React from 'react';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom/server';
import ReactDOMServer from 'react-dom/server';

import App from './App';
import { store } from './store';

export const render = (url: string, options?: object) => {
  return ReactDOMServer.renderToPipeableStream(
    <React.StrictMode>
      <Provider store={store}>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </Provider>
    </React.StrictMode>,
    options
  );
};
