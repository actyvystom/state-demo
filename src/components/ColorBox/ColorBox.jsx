import "./ColorBox.css";
import { useState } from "react";

export const ColorBox = () => {
  const [color, setColor] = useState("green");

  return (
    <>
      <div className="color-box" style={{ backgroundColor: color }}></div>
      <button
        style={{ backgroundColor: "red" }}
        onClick={() => {
          setColor("red");
          console.log(color);
        }}
      >
        Change color to red
      </button>
      <button
        style={{ backgroundColor: "blue" }}
        onClick={() => {
          setColor("blue");
          console.log(color);
        }}
      >
        Change color to blue
      </button>
    </>
  );
};
