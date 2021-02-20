import React from "react";

export const EditorContext = React.createContext({
  Bold: false,
  Italic: false,
  UnderLine: false,
  Align: "right",
  Color: "#000",
  fontSize: 12,
  fontFamily: "font 1",
});
