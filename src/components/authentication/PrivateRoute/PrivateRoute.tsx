import { Redirect, Route } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";

export default function PrivateRoute({
  component: Component,
  ...props
}: {
  component: React.ComponentType<any>;
}) {
  const { currentUser } = useAuth();

  return (
    <Route
      {...props}
      render={props => {
        return currentUser ? (
          <Component {...props} />
        ) : (
          <Redirect to="/signin" />
        );
      }}
    ></Route>
  );
}
