import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Layout } from './components';
import Router from './Router';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Layout>
        <Router />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
