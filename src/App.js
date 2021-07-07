import React from "react";
import { BrowserRouter as Router,Switch, Route } from "react-router-dom";
import "./icons.js";
import Homepage from "./screens/Homepage";
import { AuthProvider} from "./contexts/AuthContext";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import ForgotPassword from "./components/ForgotPassword";
import UpdateProfile from "./components/UpdateProfile";
import About from "./screens/About";
import Contact from "./screens/Contact";
import Search from "./components/Search";
import SearchArea from "./components/SearchArea";
import SearchPrice from "./components/SearchPrice";
import AddProperty from "./components/AddProperty";
import Signup from "./components/Signup";
import Homepagelogin from "./components/Homepagelogin";
import MapPage from "./components/MapPage.js";
import Verify from "./components/Verify.js";

import AdminPanel from "./components/AdminPanel.js";
import AdminPost from "./components/AdminPost";
import AdminAccount from "./components/AdminAccount.js";
import AdminContact from "./components/AdminContact.js";

import "./style.css";

function App() {
  return (
    <AuthProvider>
      
    <Router>
    <Switch>
              <Route exact path="/" component={Homepagelogin} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <PrivateRoute path="/Homepage" component={Homepage}/>
              <Route path="/About" component={About} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <PrivateRoute path="/AddProperty" component={AddProperty} />
              <PrivateRoute path="/Contact" component={Contact} />
              <PrivateRoute path="/Search" component={Search} />
              <PrivateRoute path="/SearchArea" component={SearchArea} />
              <PrivateRoute path="/SearchPrice" component={SearchPrice} />
              <Route path="/forgot-password" component={ForgotPassword} />
              <Route path="/AdminPanel" component={AdminPanel} />
              <PrivateRoute path="/Dashboard/" exact component={Dashboard} />
              <PrivateRoute path="/MapPage" component={MapPage} />
              <Route path="/AdminPost" component={AdminPost} />
              <Route path="/AdminAccount" component={AdminAccount} />
              <Route path="/AdminContact" component={AdminContact} />
              <Route path="/Verify" component={Verify} />

    </Switch>
    </Router>
    
    </AuthProvider>
  );
}

export default App;