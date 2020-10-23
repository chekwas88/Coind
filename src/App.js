import React from 'react';
import {ReactQueryCacheProvider, QueryCache} from 'react-query';
import Navbar from './components/Navbar';
import GlobalBar from './views/global';
import Home from './views/home';
import Markets from './views/markets';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const queryCache = new QueryCache();
  return (
    <ReactQueryCacheProvider queryCache={queryCache} >
      <Router>
        <Navbar />
        <GlobalBar />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/markets/:coin/:coinId" component={Markets}/>
        </Switch>
      </Router>
    </ReactQueryCacheProvider>
  );
}

export default App;
