import { useEffect, useState } from "react";

export function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(initialValue);

  useEffect(() => {
    const existingValue = localStorage.getItem(key);
    if (existingValue) {
      setStoredValue(JSON.parse(existingValue));
    } else {
      localStorage.setItem(key, JSON.stringify(initialValue));
    }
  }, []);

  const setValue = (newData) => {
    if (typeof newData === "function") {
      localStorage.setItem(key, JSON.stringify(newData(storedValue)));
    } else {
      localStorage.setItem(key, JSON.stringify(newData));
    }
    setStoredValue(newData);
  };

  return [storedValue, setValue];
}
