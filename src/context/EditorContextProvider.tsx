import React, { useState } from "react";
import { EditorContext } from "./EditorContext";
interface Prop {
  children: React.ReactNode;
}
function EditorContextProvider({ children }: Prop) {
  const [color, setColor] = useState("#000");
  const [IsBold, setIsBold] = useState(false);
  const [IsItalic, setIsItalic] = useState(false);
  const [IsUnderLine, setIsUnderLine] = useState(false);
  const [align, setAlign] = useState("center");
  const [fontSize, setFontSize] = useState(30);
  const [fontFamily, setFontFamily] = useState("");

  const handleBold = () => {
    IsBold ? setIsBold(false) : setIsBold(true);
  };
  const handleItalic = () => {
    IsItalic ? setIsItalic(false) : setIsItalic(true);
  };
  const handleUnderLine = () => {
    IsUnderLine ? setIsUnderLine(false) : setIsUnderLine(true);
  };

  const handleAlign = (dir: string) => {
    setAlign(dir);
  };
  const handleColor = (color: string) => {
    setColor(color);
  };
  const handleFontSize = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFontSize(parseInt(e.target.value));
  };
  const handleFontFamily = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFontFamily(e.target.value);
  };
  return (
    <div>
      <EditorContext.Provider
        value={{
          color,
          IsBold,
          IsItalic,
          IsUnderLine,
          align,
          fontFamily,
          fontSize,
          handleBold,
          handleItalic,
          handleUnderLine,
          handleAlign,
          handleColor,
          handleFontSize,
          handleFontFamily,
        }}
      >
        {children}
      </EditorContext.Provider>
    </div>
  );
}

export default EditorContextProvider;
