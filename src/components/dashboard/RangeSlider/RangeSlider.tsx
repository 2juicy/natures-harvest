import React, { useState } from "react";
import "./RangeSlider.scss";

export default function RangeSlider() {
  const [value, setValue] = useState(50);
  const [show, setShow] = useState("");

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(parseInt(e.target.value));
    setShow("show");
  }

  return (
    <div className="grid-container">
      <div className="range">
        <h4>Soil Moisture %</h4>

        <div style={{ left: value + "%" }} className={`sliderValue ${show}`}>
          <span>{value}</span>
        </div>

        <div className="field">
          <div className="value left">0</div>
          <input
            onBlur={() => setShow("")}
            onInput={handleInput}
            type="range"
            min="0"
            max="100"
            value={value}
            step="1"
          />
          <div className="value right">100</div>
        </div>
      </div>
    </div>
  );
}
