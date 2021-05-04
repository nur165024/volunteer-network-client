import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Component/Home/Home';
import Header from './Component/Header/Header';
import Banner from './Component/Header/Header';
import Content from './Component/Content/Content';

function App() {
  return (
    <Router>
      <Switch>
          <Route path="/">
            <Header />
            <Banner />
            <Content />
          </Route>
        </Switch>

    </Router>
  );
}

export default App;
