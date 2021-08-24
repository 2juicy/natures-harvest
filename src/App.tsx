import "./App.scss";
import Signup from "./components/authentication/Signup/Signup";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Signup />
    </AuthProvider>
  );
}

export default App;
