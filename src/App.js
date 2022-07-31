import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import Home from './pages/home/Home';

const List = React.lazy(() => import('./pages/list/List'));
const Login = React.lazy(() => import('./pages/login/Login'));
const New = React.lazy(() => import('./pages/new/New'));
const Single = React.lazy(() => import('./pages/single/Single'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/users'>
          <Route index element={<List />} />
          <Route path=':userId' element={<Single />} />
          <Route path='new' element={<New />} />
        </Route>
        <Route path='/products'>
          <Route index element={<List />} />
          <Route path=':productId' element={<Single />} />
          <Route path='new' element={<New />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
