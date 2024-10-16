import React from "react";
import "./App.css";
import { TrendingUp } from "lucide-react";
import {
  CartesianGrid,
  Line,
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
        <div className="graph-section">
          <Card>
            <CardHeader>
              <CardTitle>Line Chart - Multiple</CardTitle>
              <CardDescription>January - June 2024</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
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
            </CardContent>
            <CardFooter>
              <div className="flex w-full items-start gap-2 text-sm">
                <div className="grid gap-2">
                  <div className="flex items-center gap-2 font-medium leading-none">
                    Trending up by 5.2% this month{" "}
                    <TrendingUp className="h-4 w-4" />
                  </div>
                  <div className="flex items-center gap-2 leading-none text-muted-foreground">
                    Showing total visitors for the last 6 months
                  </div>
                </div>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default App;
