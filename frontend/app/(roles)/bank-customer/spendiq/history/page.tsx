"use client";

import React from "react";

export default function SpendIQHistoryPage() {
  const expenses = [
    {
      date: "Feb 8, 2026",
      category: "Food & Dining",
      amount: -450,
      payment: "Card",
      notes: "Lunch at downtown cafe",
    },
    {
      date: "Feb 7, 2026",
      category: "Salary",
      amount: 45000,
      payment: "Online",
      notes: "Monthly Salary",
    },
    {
      date: "Feb 6, 2026",
      category: "Transportation",
      amount: -200,
      payment: "Cash",
      notes: "Weekly metro pass",
    },
  ];

  return (
    <div className="p-6">
      {/* Header */}
      <h1 className="text-2xl font-semibold mb-6">Expense History</h1>

      {/* Table Container */}
      <div className="bg-white rounded-xl shadow-sm border">
        <table className="w-full text-sm">
          <thead className="border-b bg-gray-50 text-gray-600">
            <tr>
              <th className="text-left p-4">Date</th>
              <th className="text-left p-4">Category</th>
              <th className="text-left p-4">Amount</th>
              <th className="text-left p-4">Payment Type</th>
              <th className="text-left p-4">Notes</th>
              <th className="text-left p-4">Actions</th>
            </tr>
          </thead>

          <tbody>
            {expenses.map((expense, index) => (
              <tr
                key={index}
                className="border-b hover:bg-gray-50 transition"
              >
                <td className="p-4">{expense.date}</td>

                <td className="p-4">
                  <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-xs">
                    {expense.category}
                  </span>
                </td>

                <td
                  className={`p-4 font-semibold ${
                    expense.amount < 0
                      ? "text-red-500"
                      : "text-green-600"
                  }`}
                >
                  {expense.amount < 0 ? "-" : "+"}
                  {Math.abs(expense.amount).toFixed(2)} LKR
                </td>

                <td className="p-4">
                  <span className="px-3 py-1 rounded-full bg-gray-200 text-gray-800 text-xs">
                    {expense.payment}
                  </span>
                </td>

                <td className="p-4 text-gray-600">
                  {expense.notes}
                </td>

                <td className="p-4">
                  <button className="text-blue-600 hover:underline text-sm">
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
