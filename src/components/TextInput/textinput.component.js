import React from "react";
import "./textinput.style.css";
const TestInput = () => {
  return (
    <div className="test_input tust__input" id="test_input1">
      <p>This is our text</p>
      <input
        type="text"
        name="textin"
        id="textin"
        placeholder="This is our text"
      />
    </div>
  );
};

export default TestInput;
