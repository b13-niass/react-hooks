import './App.css';
import {useState, useEffect, useRef} from "react";

function App() {
  const [name, setName] = useState("");
  const renderCount = useRef(1);

  useEffect(() => {
    renderCount.current++;
  }, [name]);
  return (
    <div className="App">
      <input value={name} onChange={e => setName(e.target.value)}/>
      <div>My name is {name}</div>
      <div>Component rendered: {renderCount.current} times</div>
    </div>
  );
}
export default App;
