import { useState, useEffect, use } from "react";

function useDebounce(value, delay = 500) {
  // state to store the debounced value//
  const [debounceValue, setDebouncedValue] = useState(value);

  // effect to update debouncedValue after delay//
  useEffect(() => {

// set a timer to update the value//
const timer = setTimeout(() => {
  setDebouncedValue(value);
}, delay);

// cleanup: clear timer if value or delay changes//
return () => {
  clearTimeout(timer);
};
// re-run when value or delay changes//
  },[value,delay]);

  return debounceValue;
}

export default useDebounce;