import "./App.scss";
import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard/Dashboard";
import Signup from "./components/authentication/Signup/Signup";
import Signin from "./components/authentication/Signin/Signin";
import PrivateRoute from "./components/authentication/PrivateRoute/PrivateRoute";
import ForgotPassword from "./components/authentication/ForgotPassword/ForgotPassword";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <PrivateRoute exact path="/" component={Dashboard} />
          <Route path="/signup" component={Signup} />
          <Route path="/signin" component={Signin} />
          <Route path="/forgot-password" component={ForgotPassword} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
