import { useState } from "react";
import TodoInput2 from "./componets/TodoInput2";
import TodoList from "./componets/TodoList";

function App() {
  const [todos, setTodos] = useState([
    // "Go to the gym",
    // "Eat more fruits and vege",
    // "Pick up your babe",
  ]);

  function handleAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo];
    setTodos(newTodoList);
  }
  function handleDeleteTool(index) {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index;
    });
    setTodos(newTodoList);
  }
  function handleEditTool(index) {}
  return (
    <>
      <TodoInput2 handleAddTodos={handleAddTodos} />
      <TodoList  handleDeleteTool={ handleDeleteTool} todos={todos} />
    </>
  );
}

export default App;
