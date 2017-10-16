import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import Template from './components/Template';

const renderApp = (Component) => {
  render(
    <AppContainer>
      <Component headline="Test Headline" count={75648} showCount />
    </AppContainer>, document.getElementById('root'),
);
};

renderApp(Template);

if (module && module.hot) {
  module.hot.accept('./components/Template', () => {
    renderApp(Template);
  });
}
