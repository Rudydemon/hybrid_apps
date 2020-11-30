import {useState} from 'react';

export function useLocalStorage(key, defaultValue) {
  const getInitValue = () =>localStorage.getItem(key) ?? defaultValue;
  const [value, setValue] = useState(getInitValue);
  const setAndStoreValue = (newValue) => {
    setValue(newValue);
    localStorage.setItem(key, newValue);
  };
  return [value, setAndStoreValue];
}
