import React from "react";
import { useLoaderData } from "react-router";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const PagesToRead = () => {
  const data = useLoaderData(); // Your array of 9 books

  // Optional: Define a nice color palette for the slices
  const COLORS = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#AF19FF",
    "#FF4560",
    "#775DD0",
    "#00E396",
    "#FEB019",
  ];

  return (
    <div
      style={{
        width: "100%",
        height: "500px",
        fontFamily: '"Playfair Display", serif',
      }}
    >
      <h2 style={{ textAlign: "center" }}>Distribution of Pages by Book</h2>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            // Use 'totalPages' for the slice size and 'bookName' for the name
            label={({ bookName, percent }) =>
              `${bookName} (${(percent * 100).toFixed(0)}%)`
            }
            outerRadius={150}
            fill="#8884d8"
            dataKey="totalPages"
            nameKey="bookName"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PagesToRead;
