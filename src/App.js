import './App.css';
import {useState, useEffect} from "react";

function App() {
  const [resourceType, setResourceType] = useState('posts');
    console.log("render")

    useEffect(() =>{
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
            .then(response => response.json())
            .then(json => console.log(json))
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
