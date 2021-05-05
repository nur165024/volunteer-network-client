import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AddEvent from './Component/AddEvent/AddEvent';
import AdminDashboard from './Component/AdminDashboard/AdminDashboard';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
import Register from './Component/Register/Register';
import UserDashboard from './Component/UserDashboard/UserDashboard';

function App() {
  return (
    <>
      <Router>
        <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/user-dashboard">
              <UserDashboard />
            </Route>
            <Route path="/admin-dashboard-register-list">
              <AdminDashboard />
            </Route>
            <Route path="/add-event">
              <AddEvent />
            </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
