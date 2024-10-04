import './App.css';
import {useState, useEffect} from "react";

function App() {
  const [resourceType, setResourceType] = useState('posts');

    console.log("render")

    useEffect(() =>{
        console.log("resource changed");
        return () => {
            console.log("resource cleanup")
        }
  },[resourceType]);
  return (
    <div className="App">
      <button onClick={() => setResourceType('posts')}>Posts</button>
      <button onClick={() => setResourceType('users')}>Users</button>
      <button onClick={() => setResourceType('comments')}>Comments</button>
      <h1>{resourceType}</h1>
    </div>
  );
}

export default App;
