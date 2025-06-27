import React from "react";
import Pagination from "./components/Pagination";
import DebounceSearch from "./components/DebounceSearch";
import './App.css'

function App() {
  
  return (

      <div>
        <h1>Custom Hooks Implementation Pagination and Debounce Demo</h1>
        <DebounceSearch />
        
        <hr />

        <Pagination />
        </div>

  );
}

export default App
