import './App.css';
import {useState, useEffect} from "react";

function App() {
  const [resourceType, setResourceType] = useState('posts');
  const [items, setItems] = useState([]);

    console.log("render")

    useEffect(() =>{
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
            .then(response => response.json())
            .then(async json => await setItems(json))
  },[resourceType]);
  return (
    <div className="App">
      <button onClick={() => setResourceType('posts')}>Posts</button>
      <button onClick={() => setResourceType('users')}>Users</button>
      <button onClick={() => setResourceType('comments')}>Comments</button>
      <h1>{resourceType}</h1>
        {items.map(item => {
            return <pre key={item.id}>{JSON.stringify(item)}</pre>
        })}
    </div>
  );
}

export default App;
