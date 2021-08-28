import React, { useState } from "react";
import "./RangeSlider.scss";

export default function RangeSlider() {
  const [value, setValue] = useState(100);
  const [show, setShow] = useState("");

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(parseInt(e.target.value));
    setShow("show");
  }

  return (
    <div className="grid-container">
      <div className="range">
        <div
          style={{ left: value / 2 + "%" }}
          className={`sliderValue ${show}`}
        >
          <span>{value}</span>
        </div>

        <div className="field" tabIndex={0}>
          <div className="value left">0</div>
          <input
            onMouseUp={() => setShow("")}
            onInput={handleInput}
            type="range"
            min="10"
            max="200"
            value={value}
            step="1"
          />
          <div className="value right">200</div>
        </div>
      </div>
    </div>
  );
}
