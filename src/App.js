import './App.css';
import {useState, useEffect, useRef} from "react";

function App() {
  const [name, setName] = useState("");
  const renderCount = useRef(1);
  const inputRef = useRef();

  const focus = () =>{
      inputRef.current.focus();
      inputRef.current.value = "Some Value";
  }

  return (
    <div className="App">
      <input ref={inputRef} value={name} onChange={e => setName(e.target.value)}/>
      <div>My name is {name}</div>
      <button onClick={focus}>Focus</button>
    </div>
  );
}

export default App;
