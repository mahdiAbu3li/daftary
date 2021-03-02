import React from "react";
import mahdi from "../functions/mahdi.jpg";
import { fabric } from "fabric";

export const addRect = () => {
  const rect = new fabric.Rect({
    height: 280,
    width: 200,
    fill: "#000",
  });
  return rect;
};

export const addText = () => {
  const text = new fabric.Textbox("write your text", {
    left: 50,
    top: 50,
    width: 150,
    fontSize: 30,
    fill: "#000",
    textAlign: "center",
  });
  return text;
};

export const addCircle = () => {
  return new fabric.Circle({
    radius: 50,
    stroke: "#000",
    fill: "",
  });
};
export const addLine = () => {
  return new fabric.Line([50, 200, 200, 200], {
    left: 170,
    top: 150,
    stroke: "#000",
  });
};
