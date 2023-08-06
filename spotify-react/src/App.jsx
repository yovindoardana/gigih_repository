import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './Pages/Home';
import Dashboard from './Pages/Dashboard';
import LoginWithSpotify from './Pages/LoginWithSpotify';

function App() {
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
      path: '/loginWithSpotify',
      element: <LoginWithSpotify />
    },
    {
      path: '/verify',
      element: <Home />
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
