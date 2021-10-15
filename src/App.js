import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "../src/context/authContext";
import Login from './pages/Login/Login';
import Search from './pages/userSearch/userSearch';
import Profile from './pages/Profile/Profile';
import Repository from "./pages/Repository/RepositoryPage";
import StarredPage from "./pages/Starred/StarredPage"

export default function App() {
  

  return (
   
    <AuthProvider>
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/myGitSpace:code?"  component={Search} />
          <Route path="/:username/profile"  component={Profile} />
          <Route path="/:username/repository"  component={Repository} />
          <Route path="/:username/starred"  component={StarredPage} />

        </Switch>
        
      </Router>
    </AuthProvider>
    

  );
}
