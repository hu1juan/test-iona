import React, { lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

const HOME = lazy(() => import('./pages/Home'));

function App() {
  return (
    <Router>
      <Switch>
        <Suspense fallback={<div>LOADING...</div>}>
          <Route exact path='/' component={HOME} />
          <Redirect from='*' exact to='/' />
        </Suspense>
      </Switch>
    </Router>
  );
}

export default App;
