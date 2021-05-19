import { ReactNode } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from 'pages/auth/login';

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
      </Switch>
    </Router>
  );
}
