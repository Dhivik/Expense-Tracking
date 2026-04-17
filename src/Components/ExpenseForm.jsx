import { useState } from "react";
import Input from "./Input";
import Select from "./Select";

export default function ExpenseForm({
  setExpenseData,
  expense,
  setExpense,
  editingRowId,
  setEditingRowId,
}) {
  const [error, setError] = useState({});
  const validationRules = {
    title: [
      { required: true, message: "Title is required" },
      { minlength: 5, message: "Title should be atleast 5 characters long" },
    ],
    category: [{ required: true, message: "Category is required" }],
    price: [
      { required: true, message: "Price is required" },
      { number: true, message: "Invalid Price" },
    ],
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setExpense((prevState) => ({ ...prevState, [name]: value }));
    setError({});
  };

  const validateForm = (data) => {
    let errors = {};
    Object.entries(data).forEach(([key, value]) => {
      validationRules[key].some((rule) => {
        if (rule.required && !value) {
          errors[key] = rule.message;
          return true;
        }
        if (rule.minlength && value.length < rule.minlength) {
          errors[key] = rule.message;
          return true;
        }
        if (rule.number && /^\d+$/.test(value) === false) {
          errors[key] = rule.message;
          return true;
        }
      });
    });
    setError(errors);

    return errors;
  };

  const onFormSubmit = (e) => {
    e.preventDefault();

    const result = validateForm(expense);
    if (Object.keys(result).length) return;

    if (editingRowId) {
      setExpenseData((prevState) =>
        prevState.map((item) => {
          if (item.id === editingRowId) {
            return { ...expense, id: editingRowId };
          }
          return item;
        }),
      );
      setExpense({ title: "", category: "", price: "" });
      setEditingRowId("");
      return;
    }

    setExpenseData((prevState) => [
      ...prevState,
      { id: crypto.randomUUID(), ...expense },
    ]);

    setExpense({
      title: "",
      category: "",
      price: "",
    });
  };
  return (
    <form className="expense-form" onSubmit={onFormSubmit}>
      <Input
        label={"Title"}
        error={error.title}
        value={expense.title}
        name={"title"}
        onChange={onChange}
      />
      <Select
        name={"category"}
        id={"category"}
        label={"Category"}
        value={expense.category}
        options={["Grocery", "Clothes", "Bills", "Medicine", "Education"]}
        onChange={onChange}
        error={error.category}
      />
      <Input
        label={"Price"}
        error={error.price}
        value={expense.price}
        name={"price"}
        onChange={onChange}
      />
      <button className="add-btn">{editingRowId ? "Save" : "Submit"}</button>
    </form>
  );
}
