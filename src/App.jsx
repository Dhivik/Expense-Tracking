import { useState } from "react";
import "./App.css";
import ExpenseTable from "./Components/ExpenseTable";
import ExpenseForm from "./Components/ExpenseForm";
import ExpenseData from "./ExpenseData";
import { useLocalStorage } from "./Hooks/useLocalStrorage";

function App() {
  const [expense, setExpense] = useState({
    title: "",
    category: "",
    price: "",
  });
  const [expenseData, setExpenseData] = useLocalStorage(
    "ExpenseData",
    ExpenseData,
  );
  const [editingRowId, setEditingRowId] = useState("");

  
  return (
    <main>
      <h1>EXPENSE TRACKER</h1>
      <div className="expense-tracker">
        <ExpenseForm
          setExpenseData={setExpenseData}
          expense={expense}
          setExpense={setExpense}
          editingRowId={editingRowId}
          setEditingRowId={setEditingRowId}
        />
        <ExpenseTable
          expenseData={expenseData}
          setExpenseData={setExpenseData}
          setExpense={setExpense}
          setEditingRowId={setEditingRowId}
        />
      </div>
    </main>
  );
}

export default App;
