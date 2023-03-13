import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Basic';
import NotFound from './pages/Error/404';
import routes from './routes';

function Router(): JSX.Element {
  return (
    <Routes>
      {routes.map(props => {
        const { path, page: Page } = props;

        return <Route key={path} element={<Page />} {...props} />;
      })}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

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
