import React, { useState } from "react";

function App() {
  const [txt, setTxt] = useState("hello");

  const [over, setOver] = useState("false");

  function updateText() {
    setTxt("submitted");
  }

  function mouseOver() {
    setOver(true);
  }
  function mouseOut() {
    setOver(false);
  }

  return (
    <div>
      <h1>{txt}</h1>
      <button
        style={{ backgroundColor: over ? "black" : "white" }}
        onClick={updateText}
        onMouseOver={mouseOver}
        onMouseOut={mouseOut}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
