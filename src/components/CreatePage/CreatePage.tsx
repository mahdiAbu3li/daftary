import React, { useState, useEffect } from "react";
import { fabric } from "fabric";
import mahdi from "../../mahdi.jpg";
import BoxEditor from "../BoxEditor/BoxEditor";
import styles from "./CreatePageStyle.module.css";
import { BsLayoutTextWindowReverse } from "react-icons/bs";
import { EditorContext } from "../../context/EditorContext";
const CreatePage = () => {
  const x = new fabric.Canvas("init");
  const [canvas, setCanvas] = useState(x);
  const [selectedObject, setSelectedObject] = useState();
  const states = React.useContext(EditorContext);
  // const [color, setcolor] = useState(states.color);
  useEffect(() => {
    setCanvas(initCanvas());
  }, []);

  React.useEffect(() => {
    if (canvas.getActiveObject()) {
      console.log(canvas.getActiveObject());
      canvas.getActiveObject().set("fill", states.color);
      canvas.getActiveObject().setOptions({ fontSize: states.fontSize });
      canvas.getActiveObject().setOptions({ fontFamily: states.fontFamily });
      canvas
        .getActiveObject()
        .setOptions({ fontStyle: states.IsItalic ? "italic" : "" });
      canvas.renderAll();
    }
  }, [
    canvas,
    states.color,
    states.fontSize,
    states.fontFamily,
    states.IsItalic,
    states.IsUnderLine,
  ]);

  console.log(states.color);
  const initCanvas = () =>
    new fabric.Canvas("canvas", {
      height: window.innerHeight - 190,
      width: window.innerWidth - 22,
      backgroundColor: "#f5f5f5",
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
          <button onClick={() => addText()}>Text</button>
          <button onClick={() => addRect()}>Rectangle</button>
          <button onClick={() => addImage()}>Image</button>
        </div>

        <canvas className={styles.myCanvas} id="canvas"></canvas>
      </div>
    </div>
  );
};

export default CreatePage;
