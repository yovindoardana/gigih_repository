import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';

function App() {
  const router = [
    {
      path: '/',
      element: <Home />,
      isExact: true
    },
    {
      path: '/login',
      element: <Login />
    }
  ];

  return (
    <Router>
      <Switch>
        {router.map(({path, element, isExact}) => (
          <Route key={path} path={path} exact={isExact && true}>
            {element}
          </Route>
        ))}
      </Switch>
    </Router>
  );
}

export default App;
