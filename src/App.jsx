import React from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Input } from "@/components/ui/input";

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
};

function App() {
  return (
    <div className="flex flex-col p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Social Security Calculator</h1>
      <p className="text-lg mb-6">
        Get the most from Social Security. Our tool helps you find the best time
        to claim benefits based on your situation.
      </p>
      <h2 className="text-2xl font-semibold mb-3">How this calculator works</h2>
      <p className="mb-4">
        To estimate your lifetime Social Security benefits ("What you'll
        receive"), start with your current age and your estimated benefit at
        full retirement age. Our calculator shows how your benefits change if
        you claim between ages 62 and 70.
      </p>
      <ul className="list-disc pl-6 mb-6">
        <li>
          A full retirement age based on your birth year (between 66 and 67 for
          most people).
        </li>
        <li>An average life expectancy of 85 years.</li>
        <li>Annual cost-of-living adjustments of 2.5%.</li>
        <li>
          Potential reduction in benefits if claiming before full retirement age
          while still working.
        </li>
        <li>
          Increase in benefits for delaying claims past full retirement age.
        </li>
      </ul>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/3">
          <h3 className="text-xl font-semibold mb-3">Retirement Details</h3>
          <p className="mb-2">Current Age</p>
          <Input type="email" placeholder="Email" />
        </div>
        <div className="w-full md:w-2/3">
          <div className="bg-white shadow-md rounded-lg p-4">
            <h4 className="text-lg font-semibold mb-2">
              Retirement Benefits Chart
            </h4>
            <ResponsiveContainer width="150%" height={400}>
              <LineChart
                data={chartData}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="desktop"
                  stroke={chartConfig.desktop.color}
                  name={chartConfig.desktop.label}
                />
                <Line
                  type="monotone"
                  dataKey="mobile"
                  stroke={chartConfig.mobile.color}
                  name={chartConfig.mobile.label}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
