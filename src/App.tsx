import "./App.scss";
import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard/Dashboard";
import Signup from "./components/authentication/Signup/Signup";
import Signin from "./components/authentication/Signin/Signin";
import PrivateRoute from "./components/authentication/PrivateRoute/PrivateRoute";
import ForgotPassword from "./components/authentication/ForgotPassword/ForgotPassword";
import UpdateProfile from "./components/authentication/UpdateProfile/UpdateProfile";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <PrivateRoute exact path="/" component={Dashboard} />
          <PrivateRoute path="/update-profile" component={UpdateProfile} />
          <Route path="/signup" component={Signup} />
          <Route path="/signin" component={Signin} />
          <Route path="/forgot-password" component={ForgotPassword} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
