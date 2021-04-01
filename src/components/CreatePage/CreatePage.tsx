import React, { useState, useEffect } from "react";
import { fabric } from "fabric";
import mahdi from "../../mahdi.jpg";
import BoxEditor from "../BoxEditor/BoxEditor";
import styles from "./CreatePageStyle.module.css";
import { BsLayoutTextWindowReverse } from "react-icons/bs";
const CreatePage = () => {
  const x = new fabric.Canvas("init");
  const [canvas, setCanvas] = useState(x);

  useEffect(() => {
    setCanvas(initCanvas());
  }, []);

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
      fill: "white",
    });
    canvas.add(rect);
    canvas.renderAll();
  };
  const addText = () => {
    const text = new fabric.Textbox("write your text", {
      left: 50,
      top: 50,
      width: 150,
      fontSize: 20,
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

        {/* <div className="fabric-canvas-wrapper"> */}
        <canvas className={styles.myCanvas} id="canvas"></canvas>
        {/* </div> */}
      </div>
    </div>
  );
};

export default CreatePage;
