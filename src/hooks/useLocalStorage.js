import { useState } from "react";

export const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(
    getStoredValueOrCreateNewField(key, defaultValue)
  );

  const setLocalStorageAndUpdateValue = (data) => {
    localStorage.setItem(key, JSON.stringify(data));
    setValue(data);
  };

  return [value, setLocalStorageAndUpdateValue];
};
const getStoredValueOrCreateNewField = (key, defaultValue) => {
  const storedValue = localStorage.getItem(key);
  let value;
  if (storedValue) {
    value = JSON.parse(storedValue);
  } else {
    localStorage.setItem(key, JSON.stringify(defaultValue));
    value = defaultValue;
  }

  return value;
};
