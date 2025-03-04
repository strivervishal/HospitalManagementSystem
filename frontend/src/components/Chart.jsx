import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const Chart = () => {
  const data = [
    { name: "Dental", value: 125, color: "#00C49F" },
    { name: "Medicine", value: 25, color: "#FFA500" },
    { name: "Cardiology", value: 50, color: "#0088FE" },
  ];

  const total = data.reduce((sum, entry) => sum + entry.value, 0); // Calculate total

  const processedData = data.map((entry) => ({
    ...entry,
    percentage: ((entry.value / total) * 100).toFixed(1), // Calculate percentage
  }));

  const renderCustomizedLabel = ({ cx, cy, midAngle, outerRadius, percent, name }) => {
    const RADIAN = Math.PI / 180;
    const x = cx + (outerRadius + 20) * Math.cos(-midAngle * RADIAN);
    const y = cy + (outerRadius + 20) * Math.sin(-midAngle * RADIAN);

    return (
      <text x={x} y={y} fill="black" textAnchor={x > cx ? "start" : "end"} fontSize={12}>
        {name}
        <tspan x={x} dy="15" fontSize={10}>
          {`${(percent * 100).toFixed(1)}%`}
        </tspan>
      </text>
    );
  };

  // Custom Legend Component
  const renderLegend = (props) => {
    const { payload } = props;
    return (
      <ul className="flex items-center justify-between">
        {payload.map((entry, index) => (
          <li key={`legend-${index}`} className="flex items-center text-sm">
            <span
              className="w-3 h-3 rounded-full mr-2"
              style={{ backgroundColor: entry.color }}
            ></span>
            {entry.value} {entry.payload.value}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="flex flex-col items-center p-4 rounded-lg">
      <h2 className="text-xl font-semibold mb-2">Patients By Department</h2>
      <PieChart width={350} height={300}>
        <Pie
          data={processedData}
          cx="50%"
          cy="50%"
          innerRadius={60} // Creates the donut effect
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
          labelLine={true} // Enables lines extending outside
          label={renderCustomizedLabel}
        >
          {processedData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip />
        <Legend content={renderLegend} />
      </PieChart>
      <p className="text-lg font-semibold">{total} Total</p>
    </div>
  );
};

export default Chart;
