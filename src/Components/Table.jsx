
import React from "react";

const Table = () => {
  const data = [
    { name: "Product A", price: "$100", quantity: 20 },
    { name: "Product B", price: "$150", quantity: 10 },
    { name: "Product C", price: "$200", quantity: 5 },
  ];

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-lg font-bold mb-2">Top Products</h2>
      <table className="w-full text-left">
        <thead>
          <tr className="border-b">
            <th className="p-2">Name</th>
            <th className="p-2">Price</th>
            <th className="p-2">Quantity</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="border-b">
              <td className="p-2">{item.name}</td>
              <td className="p-2">{item.price}</td>
              <td className="p-2">{item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
