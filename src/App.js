import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "../src/context/authContext";
import Login from './pages/index';
import Search from './pages/userSearch';

export default function App() {
  

  return (
   
    <AuthProvider>
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/myGitSpace:code?"  component={Search} />
        </Switch>
        
      </Router>
    </AuthProvider>
    

  );
}
