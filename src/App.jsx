import React from "react";
import "./App.css";

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h1 className="title">Social Security Calculator</h1>
      <p className="explanation">
        Get the most from Social Security. Our tool helps you find the best time
        to claim benefits based on your situation.
      </p>
      <h2 className="subtitle">How this calculator works</h2>
      <p className="explanation">
        To estimate your lifetime Social Security benefits ("What you'll
        receive"), start with your current age and your estimated benefit at
        full retirement age. Our calculator shows how your benefits change if
        you claim between ages 62 and 70. It factors in early claiming
        penalties, delayed retirement credits, and potential benefit taxation if
        you're still working. When calculating your total lifetime benefits, our
        default assumptions include:
        <ul>
          <li>
            A full retirement age based on your birth year (between 66 and 67
            for most people).
          </li>
          <li>An average life expectancy of 85 years.</li>
          <li>Annual cost-of-living adjustments of 2.5%.</li>
          <li>
            Potential reduction in benefits if claiming before full retirement
            age while still working.
          </li>
          <li>
            Increase in benefits for delaying claims past full retirement age.
          </li>
        </ul>
        The calculator generates a graph showing your cumulative benefits over
        time, helping you identify the "break-even" point and the age that
        maximizes your total benefits. You can adjust these assumptions in the
        "advanced settings" to better match your personal situation.
      </p>
      <div className="input-graph-section">
        <div className="input-section">
          <h3 className="input-title">Retirement Details</h3>
          <p className="input-text">Current Age</p>
        </div>
        <div className="graph-section"></div>
      </div>
    </div>
  );
}

export default App;
