import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from './components/layout/Layout';
import Home from './components/Home';
import StateTodo from './components/StateTodo';
import NoPage from './components/other/NoPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/state-todo" element={<StateTodo />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;