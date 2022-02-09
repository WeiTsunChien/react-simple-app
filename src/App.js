import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as routes from './constants/routes';

import Layout from './components/layout/Layout';
import Home from './components/Home';
import StateTodo from './components/StateTodo';
import NoPage from './components/other/NoPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.HOME.path} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={routes.STATE_TODO.path} element={<StateTodo />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;