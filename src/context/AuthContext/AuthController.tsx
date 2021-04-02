import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "./AuthContext";
const AuthController: React.FC<{}> = ({ children }) => {
  const [isLogin, setIsLogin] = useState(
    window.localStorage.getItem("isLogin") === "true"
  );
  const history = useHistory();
  const onLogin = () => {
    setIsLogin(true);
    window.localStorage.setItem("isLogin", "true");

    history.push("./dashboard");
  };
  const onLogout = () => {
    setIsLogin(false);
    window.localStorage.setItem("isLogin", "false");
    //   history.push("./dashboard")
  };
  return (
    <div>
      <AuthContext.Provider value={{ isLogin, onLogin, onLogout }}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthController;
