import React, { useState, createContext } from "react";
import AlbumParent from "./AlbumParent";
import "./App.css";

import { FaSun, FaMoon } from "react-icons/fa";
export const AppTheme = createContext();

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <AppTheme.Provider value={theme}>
      <div className={`container ${theme}`}>
        <div className="theme-toggle">
          <button onClick={toggleTheme} className="theme-btn">
            {theme === "light" ? <FaMoon /> : <FaSun />}
          </button>
        </div>
        <h1>Album Card</h1>
        <AlbumParent />
      </div>
    </AppTheme.Provider>
  );
}

export default App;
