import { ReactNode } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from 'pages/auth/login';
import Signup from 'pages/auth/signup';

type PropTypes = {
  children: ReactNode;
};

export default function MainRouter(props: PropTypes) {
  const { children } = props;

  return (
    <Router>
      {children}

      <Switch>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/signup'>
          <Signup />
        </Route>
      </Switch>
    </Router>
  );
}
