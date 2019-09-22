import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import Transfer from './components/dashboard/Transfer'
import Request from './components/dashboard/Request'
import Account from './components/account/Account'
import AccountDetails from './components/account/AccountDetails'
import Signin from './components/auth/Signin'
import Signup from './components/auth/Signup';
import Pay from './components/account/Pay';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Dashboard}/>
          <Route path="/transfer" component={Transfer}/>
          <Route path="/request" component={Request}/>
          <Route path="/account" component={Account}/>
          <Route path="/signin" component={Signin}/>
          <Route path="/signup" component={Signup}/>
          <Route path="/pay" component={Pay}/>
          <Route path="/accountdetails/:id" render={props => <AccountDetails {...props} />}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
