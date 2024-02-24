import React, { useState } from "react";
import "./App.css";

function App() {
  const [expression, setExpression] = useState(""); // State for the input expression
  const [output, setOutput] = useState(""); // State for the calculated result

  // Function to handle button clicks
  const handleButtonClick = (value) => {
    setExpression((prevExpression) => prevExpression + value);
  };

  // Function to evaluate the expression
  const evaluateExpression = () => {
    try {
      const result = eval(expression); // Evaluate the expression
      setOutput(result.toString());
    } catch (error) {
      setOutput("Error"); // Display "Error" for invalid expressions
    }
  };

  // Function to clear the expression and output
  const clearExpression = () => {
    setExpression("");
    setOutput("");
  };

  return (
    <div className="calculator">
      <h1> React Calculator</h1>
      <input type="text" id="expression" value={expression} readOnly />
      <div className="output" id="output">
        {output}
      </div>
      <div className="buttons">
        {[7, 8, 9, "+", 4, 5, 6, "-", 1, 2, 3, "*", "C", 0, "=", "/"].map(
          (value) => (
            <button
              key={value}
              onClick={() =>
                value === "="
                  ? evaluateExpression()
                  : value === "C"
                  ? clearExpression()
                  : handleButtonClick(value)
              }
            >
              {value}
            </button>
          )
        )}
      </div>
    </div>
  );
}

export default App;
