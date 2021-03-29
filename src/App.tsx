import React from "react";
import EditorJS from "./components/editor/Editor";
import Book from "./components/Book/Book";
import CreatePage from "./components/CreatePage/CreatePage";
import EditorContextProvider from "./context/EditorContextProvider";
import LoginPage from "./components/loginPage/LoginPage";
function App() {
  return (
    <div className="App">
      <EditorContextProvider>
        {/* <CreatePage /> */}
        {/* <Book /> */}
        <LoginPage />
        {/* <EditorJS /> */}
      </EditorContextProvider>
    </div>
  );
}

export default App;
