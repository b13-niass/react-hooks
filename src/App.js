import './App.css';
import {useState, useEffect} from "react";

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    }

    useEffect(() =>{
      window.addEventListener("resize", handleResize)
      return () => window.removeEventListener("resize", handleResize);
  },[]);
  return (
    <div className="App">
        {windowWidth}
    </div>
  );
}

export default App;
