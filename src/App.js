import './App.css';
import React from "react";
import {useState} from "react";
import ClassContextComponent from "./ClassContextComponent";
import FunctionContextComponent from "./FunctionContextComponent";

export const ThemeContext = React.createContext();

function App() {
const [darkTheme, setDarkTheme] = useState(true);

const toggleTheme = () => {
  setDarkTheme(!darkTheme);
}

  return (
      <ThemeContext.Provider value={darkTheme}>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <FunctionContextComponent/>
        <ClassContextComponent/>
      </ThemeContext.Provider>
  );
}

export default App;
