import { useState } from "react";

export function useFilter(expense, callback) {
  const [result, setResult] = useState("");

  const results = expense.filter((item) => {
    return callback(item).toLowerCase().includes(result.toLowerCase());
  });
  return [results, setResult];
}
