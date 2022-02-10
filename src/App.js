import React from 'react';
import { BrowserRouter, Routes, Route, useRoutes } from "react-router-dom";
import * as routes from './constants/routes';

import Layout from './components/layout/Layout';
import Home from './pages/Home';
import StateTodo from './pages/StateTodo';
import NoPage from './components/other/NoPage';

const App = () => {
  const routes = [
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "state-todo", element: <StateTodo /> },
        { path: "*", element: <NoPage /> }
      ]
    },
  ];

  console.log(routes);

  let element = useRoutes(routes);

  console.log(element);

  return element;

  // return (
  //   <BrowserRouter>
  //     <Routes>
  //       <Route path={routes.HOME.path} element={<Layout />}>
  //         <Route index element={<Home />} />
  //         <Route path={routes.STATE_TODO.path} element={<StateTodo />} />
  //         <Route path="*" element={<NoPage />} />
  //       </Route>
  //     </Routes>
  //   </BrowserRouter>
  // );
};

export default App;