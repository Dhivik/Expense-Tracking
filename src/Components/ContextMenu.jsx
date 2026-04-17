import React from "react";

export default function ({
  position,
  expenseData,
  setExpenseData,
  rowId,
  setMenuPosition,
  setExpense,
  setEditingRowId,
}) {
  if (!position.left) return;
  const handleDelete = (rowId) => {
    setExpenseData(expenseData.filter((data) => data.id !== rowId));
  };
  return (
    <div className="context-menu" style={position}>
      <div
        onClick={() => {
          const { title, category, price } = expenseData.find(
            (data) => data.id === rowId,
          );
          setEditingRowId(rowId);
          setExpense({ title, category, price });
          setMenuPosition({});
        }}
      >
        Edit
      </div>
      <div
        onClick={() => {
          handleDelete(rowId);
          setMenuPosition({});
        }}
      >
        Delete
      </div>
    </div>
  );
}
