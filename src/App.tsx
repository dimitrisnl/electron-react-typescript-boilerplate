import React, { useReducer } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

import PageOne from './pages/PageOne';
import PageTwo from './pages/PageTwo';

import { reducer, initialState, AppContext } from './state';
import Toolbar from './components/Toolbar';
import ScrollToTop from './components/ScrollToTop';
import useNavigatorOnline from './components/useNavigatorOnline';
import { NoConnection } from './components/EmptyState';

const App = () => {
  const [state, dispatch] = useReducer<React.Reducer<State, Action>>(
    reducer,
    initialState
  );
  const { isOffline } = useNavigatorOnline();

  if (isOffline) {
    return <NoConnection />;
  }

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <HashRouter>
        <ScrollToTop />
        <Toolbar />
        <Routes>
          <Route path="/" element={<PageOne />} />
          <Route path="/page-2" element={<PageTwo />} />
        </Routes>
      </HashRouter>
    </AppContext.Provider>
  );
};

export default App;
