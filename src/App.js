import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "../src/context/authContext";
import Login from './pages/Login/Login';
import Search from './pages/userSearch/userSearch';

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
