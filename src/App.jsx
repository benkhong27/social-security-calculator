import React from "react";
import "./App.css"; // Optionally keep this if you want to use custom styles

function App() {
  return (
    <div style={{ display: "column" }}>
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
        default assumptions include: A full retirement age based on your birth
        year (between 66 and 67 for most people). An average life expectancy of
        85 years. Annual cost-of-living adjustments of 2.5%. Potential reduction
        in benefits if claiming before full retirement age while still working.
        Increase in benefits for delaying claims past full retirement age. The
        calculator generates a graph showing your cumulative benefits over time,
        helping you identify the "break-even" point and the age that maximizes
        your total benefits. You can adjust these assumptions in the "advanced
        settings" to better match your personal situation.
      </p>
    </div>
  );
}

export default App;
