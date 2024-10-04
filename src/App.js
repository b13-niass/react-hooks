import './App.css';
import {useState, useEffect, useRef} from "react";

function App() {
  const [name, setName] = useState("");
  const prevName = useRef();

  useEffect(() => {
      prevName.current = name;
  }, [name]);

  return (
    <div className="App">
      <input value={name} onChange={e => setName(e.target.value)}/>
      <div>My name is {name} and it use to be {prevName.current}</div>
    </div>
  );
}

export default App;
