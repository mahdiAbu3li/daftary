import React, { useState, useEffect } from "react";
import { fabric } from "fabric";
import mahdi from "../../mahdi.jpg";

const CreatePage = () => {
  const x = new fabric.Canvas("init");
  const [canvas, setCanvas] = useState(x);
  useEffect(() => {
    setCanvas(initCanvas());
  }, []);

  const initCanvas = () =>
    new fabric.Canvas("canvas", {
      height: 900,
      width: 800,
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
    const img = new fabric.Image(mahdi, {
      left: 100,
      top: 100,
      angle: 30,
      opacity: 0.85,
    });
    canvas.add(img);
    canvas.renderAll();
  };
  return (
    <div
      className="container"
      style={{
        backgroundColor: "white",
        border: "1px solid black",
        height: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <canvas id="canvas"></canvas>
      <button onClick={() => addText()}>Text</button>
      <button onClick={() => addRect()}>Rectangle</button>
      <button onClick={() => addImage()}>Image</button>
    </div>
  );
};

export default CreatePage;
