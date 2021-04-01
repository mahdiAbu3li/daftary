import React from "react";

const AuthContext = React.createContext({
  isLogin: false,
  onLogin: () => {},
  onLogout: () => {},
});

export default AuthContext;
