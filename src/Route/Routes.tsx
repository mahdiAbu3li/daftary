import React from "react";
import LoginPage from "../components/loginPage/LoginPage";
import { Switch, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Book from "../components/Book/Book";
const Routes = () => {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <LoginPage />
        </Route>
        <PrivateRoute path="/dashboard">
          <Book />
        </PrivateRoute>
      </Switch>
    </div>
  );
};

export default Routes;
