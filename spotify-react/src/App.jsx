import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Verify from './Pages/Verify';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/verify',
      element: <Verify />
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
