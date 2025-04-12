import { useState } from "react";
function App() {
  useState();
  const [newItem, setNewItem] = useState("");
  const [toDos, setToDos] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    setToDos((currentToDos) => {
      return [
        ...currentToDos,
        { id: crypto.randomUUID(), tittle: newItem, completed: false },
      ];
    });
    setNewItem("");
  }

  function toggleToDo(id, completed) {
    setToDos((currentToDos) => {
      return currentToDos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  }

  function deleteToDo(id) {
    setToDos((currentToDos) => {
      return currentToDos.filter((todo) => todo.id !== id);
    });
  }
  console.log(toDos);
  return (
    <div className="appContainer">
      <form action="" onSubmit={handleSubmit} className="newItemForm">
        <div className="formRow">
          <label htmlFor="item">New Item</label>
          <input
            type="text"
            id="item"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)} //returns a new input every time
          />
        </div>
        <button className="btn">Add</button>
      </form>
      <h1 className="header">To do list </h1>

      <ul className="list">
        {toDos.length === 0 && "Nothing on schedule"}
        {toDos.map((todo) => {
          return (
            <li key={todo.id}>
              <label htmlFor="">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={(e) => toggleToDo(todo.id, e.target.checked)}
                />
                {todo.tittle}
              </label>
              <button className="deleteBtn" onClick={() => deleteToDo(todo.id)}>
                delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
