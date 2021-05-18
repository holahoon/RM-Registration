import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from 'pages/auth/login';

export default function MainRouter() {
  return (
    <Router>
      <Switch>
        <Route path='/login'>
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}
