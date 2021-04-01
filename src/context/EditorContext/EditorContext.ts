import React from "react";

export const EditorContext = React.createContext({
  IsBold: false,
  IsItalic: false,
  IsUnderLine: false,
  align: "right",
  color: "#000",
  fontSize: 30,
  fontFamily: "font 1",
  handleBold: () => {},
  handleItalic: () => {},
  handleUnderLine: () => {},
  handleAlign: (dir: string) => {},
  handleColor: (color: string) => {},
  handleFontSize: (e: React.ChangeEvent<HTMLInputElement>) => {},
  handleFontFamily: (e: React.ChangeEvent<HTMLSelectElement>) => {},
});
