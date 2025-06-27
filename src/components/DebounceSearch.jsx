import { useState, useEffect, use } from "react";
import useDebounce from "../hooks/useDebounce";

function DebounceSearch() {
  const [inputValue, setInputValue] = useState("");
  const [delay, setDelay] = useState(500);
  const debouncedValue = useDebounce(inputValue, delay);

  // simulate API call//
  useEffect(() => {
    if (debouncedValue) {
      console.log(`Searching for: ${debouncedValue}`);
    }
  },[debouncedValue]);

  return (
    <div>
      <h2>Debounce Search</h2>
      <label>
        Debounce Delay(ms):{""}
        <input
          type="number"
          value-{delay}
          onChange={(e) => setDelay(Number(e.target.value))}
          min="0"
          />
      </label>
      <br/>
      <label>
        Type to search:{""}
        <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        />
      </label>
      <p>Current Input:{inputValue}</p>
      <p>Debounced Value (after {delay}ms):{debouncedValue}</p>
    </div>
  )
}
