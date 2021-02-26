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

  return (
    <EditorContext.Consumer>
      {(value) => (
        <div className={styles.container}>
          <div className={styles.textType}>
            <button onClick={value.handleBold}>
              <BsTypeBold />
            </button>
            <button onClick={value.handleItalic}>
              <BsTypeItalic />
            </button>
            <button onClick={value.handleUnderLine}>
              <BsTypeUnderline />
            </button>
          </div>

          <div className={styles.textAlign}>
            <button onClick={() => value.handleAlign("left")}>
              <BsTextLeft />
            </button>
            <button onClick={() => value.handleAlign("center")}>
              <BsTextCenter />
            </button>
            <button onClick={() => value.handleAlign("right")}>
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
                    color={value.color}
                    onChange={(color) => value.handleColor(color.hex)}
                  />
                </div>
              ) : (
                <></>
              )}
            </div>

            <div className={styles.selectors}>
              <select
                id="fontSize"
                value={value.fontSize}
                onChange={(e) => value.handleFontSize(e)}
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

              <select
                value={value.fontFamily}
                onChange={(e) => value.handleFontFamily(e)}
              >
                <option>font 1</option>
                <option>font 2</option>
                <option>font 3</option>
                <option>font 4</option>
                <option>font 5</option>
              </select>
            </div>
          </div>
        </div>
      )}
    </EditorContext.Consumer>
  );
}

export default BoxEditor;
