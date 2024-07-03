import { useEffect, useState } from "react";

export function useLocalStorageState(initialValue, key) {
  console.log("🚀CHECK  initialValue =", initialValue);
  console.log("🚀CHECK  key =", key);

  const [value, setValue] = useState(function () {
    const storeValue = localStorage.getItem(key);
    return storeValue ? JSON.parse(storeValue) : initialValue;
  });

  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(value));
    },
    [value, key],
  );

  return [value, setValue];
}
