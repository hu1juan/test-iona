import React, { lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import CatContextProvider from './contexts/CatContextProvider';

const HOME = lazy(() => import('./pages/Home'));

function App() {
  return (
    <CatContextProvider>
      <Router>
        <Switch>
          <Suspense fallback={<div>LOADING...</div>}>
            <Route exact path='/' component={HOME} />
            <Redirect from='*' exact to='/' />
          </Suspense>
        </Switch>
      </Router>
    </CatContextProvider>
  );
}

export default App;
