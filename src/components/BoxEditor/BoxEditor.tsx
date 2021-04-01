import React, { useState } from "react";
import { BsTextLeft } from "react-icons/bs";
import { BsTextRight } from "react-icons/bs";
import { BsTextCenter } from "react-icons/bs";
import { BsTypeBold } from "react-icons/bs";
import { BsTypeItalic } from "react-icons/bs";
import { BsTypeUnderline } from "react-icons/bs";
import { SketchPicker } from "react-color";
import { EditorContext } from "../../context/EditorContext";
import styles from "./BoxEditor.module.css";

function BoxEditor() {
  const [OpenPicker, setOpenPicker] = useState(false);
  const [color, setColor] = useState("#fff");
  const [Bold, setBold] = useState(false);
  const [Italic, setItalic] = useState(false);
  const [UnderLine, setUnderLine] = useState(false);
  const [Align, setAlign] = useState("");
  const [FontSize, setFontSize] = useState("12");
  const [FontFamily, setFontFamily] = useState("");

  const IsBold = () => {
    Bold ? setBold(false) : setBold(true);
  };
  const IsItalic = () => {
    Italic ? setItalic(false) : setItalic(true);
  };
  const IsUnderLine = () => {
    UnderLine ? setUnderLine(false) : setUnderLine(true);
  };

  const align = (dir: string) => {
    setAlign(dir);
  };
  const changeColor = (color: string) => {
    setColor(color);
  };
  const changeFontSize = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFontSize(e.target.value);
  };
  const changeFontFamily = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFontFamily(e.target.value);
  };
  console.log(color);
  console.log(FontSize);
  return (
    <div className={styles.container}>
      <div className={styles.textType}>
        <button onClick={IsBold}>
          <BsTypeBold />
        </button>
        <button onClick={IsItalic}>
          <BsTypeItalic />
        </button>
        <button onClick={IsUnderLine}>
          <BsTypeUnderline />
        </button>
      </div>

      <div className={styles.textAlign}>
        <button onClick={() => align("left")}>
          <BsTextLeft />
        </button>
        <button onClick={() => align("center")}>
          <BsTextCenter />
        </button>
        <button onClick={() => align("right")}>
          <BsTextRight />
        </button>
      </div>
      <div className={styles.selAndPick}>
        <div className={styles.picker}>
          <button
            onClick={() => {
              OpenPicker ? setOpenPicker(false) : setOpenPicker(true);
              console.log(OpenPicker);
            }}
          >
            Color
          </button>
          {OpenPicker ? (
            <div className={styles.sketchPicker}>
              <SketchPicker
                color={color}
                onChange={(color) => changeColor(color.hex)}
              />
            </div>
          ) : (
            <></>
          )}
        </div>

        <div className={styles.selectors}>
          <select
            id="fontSize"
            value={FontSize}
            onChange={(e) => changeFontSize(e)}
          >
            <option>10</option>
            <option>12</option>
            <option>14</option>
            <option>16</option>
            <option>18</option>
            <option>20</option>
            <option>22</option>
            <option>24</option>
            <option>26</option>
            <option>30</option>
          </select>

          <select value={FontFamily} onChange={(e) => changeFontFamily(e)}>
            <option>font 1</option>
            <option>font 2</option>
            <option>font 3</option>
            <option>font 4</option>
            <option>font 5</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default BoxEditor;
