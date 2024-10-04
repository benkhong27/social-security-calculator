import React from "react";
import "./App.css"; // Optionally keep this if you want to use custom styles

function App() {
  return (
    <div>
      {/* Your components or content go here */}
      <h1>Social Security Calculator</h1>
      <p>
        This Social Security calculator helps you find the best time to start
        claiming your benefits. It estimates your total lifetime benefits for
        different claiming ages (62 to 70), considering factors like your Full
        Retirement Age, early claiming penalties, delayed retirement credits,
        and potential benefit taxation if you're still working. The calculator
        generates a graph showing your cumulative benefits over time, helping
        you spot the "break-even" point and the age that maximizes your total
        benefits. Using current Social Security rules and adjustable default
        assumptions, it provides a clear picture of your options. This tool is
        designed to help you make an informed decision about when to start your
        retirement benefits, potentially maximizing your lifetime Social
        Security income.
      </p>
    </div>
  );
}

export default App;
