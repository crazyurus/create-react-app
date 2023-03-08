import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

function Router(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element="Not Found" />
    </Routes>
  );
}

export default Router;
