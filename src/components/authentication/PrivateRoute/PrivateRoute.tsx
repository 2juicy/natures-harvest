import { Redirect, Route } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";

interface Props {
  exact?: boolean;
  path: string;
  component: React.ComponentType<any>;
}

export default function PrivateRoute({
  component: Component,
  ...props
}: Props) {
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
