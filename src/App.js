import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { userInputs, productInputs } from './data/formInputs';
import ThemeProvider from './store/themeProvider';

import Layout from './components/Layout/Layout';
import Home from './pages/home/Home';
import Loader from './components/UI/Loader';

const Users = React.lazy(() => import('./pages/users/Users'));
const Login = React.lazy(() => import('./pages/login/Login'));
const NewUser = React.lazy(() => import('./pages/newUser/NewUser'));
const SingleUser = React.lazy(() => import('./pages/singleUser/SingleUser'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/users'>
              <Route index element={<Users />} />
              <Route path=':qId' element={<SingleUser />} />
              <Route
                path='new'
                element={<NewUser title='Add New User' inputs={userInputs} />}
              />
            </Route>
            <Route path='/products'>
              <Route index element={<Users />} />
              <Route path=':qId' element={<SingleUser />} />
              <Route
                path='new'
                element={
                  <NewUser title='Add New User' inputs={productInputs} />
                }
              />
            </Route>
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Suspense>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
