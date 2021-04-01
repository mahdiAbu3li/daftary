import React, { useState, useEffect } from "react";
import { fabric } from "fabric";
import mahdi from "../../mahdi.jpg";
import BoxEditor from "../BoxEditor/BoxEditor";
import styles from "./CreatePageStyle.module.css";
import { BsLayoutTextWindowReverse } from "react-icons/bs";
import { EditorContext } from "../../context/EditorContext";
import { MdTextFields } from "react-icons/md";
import { BsBoundingBoxCircles } from "react-icons/bs";
import { RiImageAddFill } from "react-icons/ri";
const CreatePage = () => {
  const x = new fabric.Canvas("init");
  const [canvas, setCanvas] = useState(x);
  // const [selectedObject, setSelectedObject] = useState();
  const [isText, setIsText] = useState(false);
  const states = React.useContext(EditorContext);
  // const [color, setcolor] = useState(states.color);
  useEffect(() => {
    setCanvas(initCanvas());
  }, []);

  React.useEffect(() => {
    if (canvas.getActiveObject()) {
      console.log(states.fontFamily);
      const activeObj = canvas.getActiveObject();
      activeObj.set("fill", states.color);
      activeObj.setOptions({ fontSize: states.fontSize });
      activeObj.setOptions({ fontFamily: states.fontFamily });
      activeObj.setOptions({ underline: states.IsUnderLine });
      activeObj.setOptions({ textAlign: states.align });
      activeObj.setOptions({ fontWeight: states.IsBold ? "bold" : "" });
      activeObj.setOptions({ fontStyle: states.IsItalic ? "italic" : "" });
      canvas.renderAll();
    }
  }, [
    canvas,
    states.color,
    states.fontSize,
    states.fontFamily,
    states.IsItalic,
    states.IsUnderLine,
    states.IsBold,
    states.align,
  ]);

  canvas.on("mouse:down", function (options) {
    if (options.target) {
      canvas.bringToFront(options.target);
    }
  });
  console.log(states.color);
  const initCanvas = () =>
    new fabric.Canvas("canvas", {
      height: window.innerHeight - 65,
      width: window.innerWidth - 40,
      backgroundColor: "#fff",
    });

  const addRect = () => {
    const rect = new fabric.Rect({
      height: 280,
      width: 200,
      fill: states.color,
    });
    canvas.add(rect);
    canvas.renderAll();
  };

  const addText = () => {
    const text = new fabric.Textbox("write your text", {
      left: 50,
      top: 50,
      width: 150,
      fontSize: states.fontSize,
      fill: states.color,
      textAlign: "center",
    });
    canvas.add(text);
    canvas.renderAll();
  };
  const addImage = () => {
    fabric.Image.fromURL(mahdi, (img) => {
      canvas.add(img);
    });

    canvas.renderAll();
  };
  return (
    <div>
      <div className={styles.container}>
        <BoxEditor />

        <div className={styles.addObject}>
          <button onClick={() => addText()}>
            <MdTextFields />
          </button>
          <button onClick={() => addRect()} style={{ fontSize: "2em" }}>
            <BsBoundingBoxCircles />
          </button>
          <button onClick={() => addImage()}>
            <RiImageAddFill />
          </button>
        </div>

        <canvas className={styles.myCanvas} id="canvas"></canvas>
      </div>
    </div>
  );
};

export default CreatePage;
