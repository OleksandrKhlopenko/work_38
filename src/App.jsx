import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [todos, setUsers] = useState([]);
  useEffect(() => {
    const getUsers = () => {
      fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then((res) => res.json())
        .then((data) => setUsers(data));
    };
    getUsers();
  }, []);

  return (
    <div className="App">
      {todos.map((user) => (
        <div>
          <p>{user.id}</p>
          <p>{user.userId}</p>
          <p>{user.title}</p>
          <p>{user.completed}</p>
        </div>
      ))}
    </div>
  );
}
export default App;
