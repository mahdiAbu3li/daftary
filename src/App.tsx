import React from "react";
import EditorContextProvider from "./context/EditorContext/EditorContextProvider";
import { BrowserRouter as Router } from "react-router-dom";
import AuthController from "./context/AuthContext/AuthController";
import Routes from "./Route/Routes";

function App() {
  return (
    <div className="App">
      <EditorContextProvider>
        <Router>
          <AuthController>
            {/* <CreatePage /> */}
            {/* <Book /> */}
            <Routes />
            {/* <EditorJS /> */}
          </AuthController>
        </Router>
      </EditorContextProvider>
    </div>
  );
}

export default App;
