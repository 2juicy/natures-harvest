import "./App.scss";
import Signup from "./components/authentication/Signup/Signup";
import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Route path="/signup" component={Signup} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
