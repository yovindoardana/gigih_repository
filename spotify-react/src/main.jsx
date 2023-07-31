import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Pages/Home';
import 'remixicon/fonts/remixicon.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Callback from './Pages/Callback';
import Dashboard from './Pages/Dashboard';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/dashboard',
    element: <Dashboard />
  },
  {
    path: '/callback',
    element: <Callback />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
