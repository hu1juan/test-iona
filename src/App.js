import React, { lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import CatContextProvider from './contexts/CatContextProvider';

const HOME = lazy(() => import('./pages/Home'));
const VIEW_CAT = lazy(() => import('./pages/ViewCat'));

function App() {
  return (
    <CatContextProvider>
      <Router>
        <Switch>
          <Suspense fallback={<div>LOADING...</div>}>
            <Route exact path='/' component={HOME} />
            <Route exact path='/:id' component={VIEW_CAT} />
          </Suspense>
        </Switch>
      </Router>
    </CatContextProvider>
  );
}

export default App;
