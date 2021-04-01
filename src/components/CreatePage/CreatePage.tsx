import React, { useState, useEffect } from "react";
import { fabric } from "fabric";
import BoxEditor from "../BoxEditor/BoxEditor";
import styles from "./CreatePageStyle.module.css";
import { BsCircle } from "react-icons/bs";
import { EditorContext } from "../../context/EditorContext/EditorContext";
import { MdTextFields } from "react-icons/md";
import { BsBoundingBoxCircles } from "react-icons/bs";
import { RiImageAddFill } from "react-icons/ri";
import { FaSlash } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

import {
  addText,
  addRect,
  addCircle,
  addLine,
} from "../../functions/addObjects";

const CreatePage = () => {
  const x = new fabric.Canvas("init");
  const [canvas, setCanvas] = useState(x);
  const [isText, setIsText] = useState(false);
  const states = React.useContext(EditorContext);
  useEffect(() => {
    setCanvas(initCanvas());
  }, []);

  React.useEffect(() => {
    if (canvas.getActiveObject()) {
      const activeObj = canvas.getActiveObject();
      activeObj.setOptions({ fontStyle: states.IsItalic ? "italic" : "" });
      canvas.renderAll();
    }
  }, [canvas, states.IsItalic]);

  React.useEffect(() => {
    const obj = canvas.getActiveObject();
    if (obj) {
      obj.set("fill", states.color);
      canvas.renderAll();
    }
  }, [canvas, states.color]);
  React.useEffect(() => {
    const obj = canvas.getActiveObject();
    if (obj) {
      obj.setOptions({ fontSize: states.fontSize });
      canvas.renderAll();
    }
  }, [canvas, states.fontSize]);
  React.useEffect(() => {
    const obj = canvas.getActiveObject();
    if (obj) {
      obj.setOptions({ fontFamily: states.fontFamily });
      canvas.renderAll();
    }
  }, [canvas, states.fontFamily]);
  React.useEffect(() => {
    const obj = canvas.getActiveObject();
    if (obj) {
      obj.setOptions({ underline: states.IsUnderLine });
      canvas.renderAll();
    }
  }, [canvas, states.IsUnderLine]);
  React.useEffect(() => {
    const obj = canvas.getActiveObject();
    if (obj) {
      obj.setOptions({ textAlign: states.align });
      canvas.renderAll();
    }
  }, [canvas, states.align]);
  React.useEffect(() => {
    const obj = canvas.getActiveObject();
    if (obj) {
      obj.setOptions({ fontWeight: states.IsBold ? "bold" : "" });
      canvas.renderAll();
    }
  }, [canvas, states.IsBold]);

  canvas.on("mouse:down", function (obj) {
    if (obj.target) {
      canvas.bringToFront(obj.target);
    }
    if (obj.target && obj.target.type === "textbox") setIsText(true);
    else setIsText(false);
  });

  console.log(isText);
  const initCanvas = () =>
    new fabric.Canvas("canvas", {
      height: window.innerHeight - 65,
      width: window.innerWidth - 40,
      backgroundColor: "#fff",
    });

  const addObject = (object: fabric.Object) => {
    canvas.add(object);
    object.center();
    // console.log(canvas.loadFromJSON(asd , ()));
    canvas.renderAll();
  };
  const addImage = () => {
    fabric.Image.fromURL(
      // "https://homepages.cae.wisc.edu/~ece533/images/airplane.png"
      "C:\\Users\\mahdii\\Desktop\\New\\ma.jpg",
      (img) => {
        canvas.add(img);
        canvas.renderAll();
      }
    );
  };
  const removeObject = () => {
    const obj = canvas.getActiveObject();
    canvas.remove(obj);
  };

  return (
    <div>
      <div className={styles.container}>
        {isText ? <BoxEditor /> : <></>}

        <div className={styles.addObject}>
          <button onClick={() => addObject(addText())}>
            <MdTextFields />
          </button>
          <button
            onClick={() => addObject(addRect())}
            style={{ fontSize: "2em" }}
          >
            <BsBoundingBoxCircles />
          </button>
          <button
            onClick={() => addObject(addCircle())}
            style={{ fontSize: "2em" }}
          >
            <BsCircle />
          </button>
          <button
            onClick={() => addObject(addLine())}
            style={{ fontSize: "2em" }}
          >
            <FaSlash />
          </button>
          <button onClick={() => addImage()}>
            <RiImageAddFill />
          </button>
          <button onClick={removeObject}>
            <RiDeleteBin6Line />
          </button>
        </div>

        <canvas className={styles.myCanvas} id="canvas"></canvas>
      </div>
    </div>
  );
};

export default CreatePage;
