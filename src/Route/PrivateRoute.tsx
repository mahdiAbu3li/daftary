import React from "react";
import AuthContext from "../context/AuthContext/AuthContext";
import { Route, RouteProps, Redirect } from "react-router-dom";

const PrivateRoute: React.FC<RouteProps> = (props) => {
  return (
    <div>
      <Route {...props}>
        <AuthContext.Consumer>
          {(value) => (value.isLogin ? props.children : <Redirect to="/" />)}
        </AuthContext.Consumer>
      </Route>
    </div>
  );
};

export default PrivateRoute;
