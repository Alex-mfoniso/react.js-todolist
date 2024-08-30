import { useState,useEffect} from "react";
import TodoInput2 from "./componets/TodoInput2";
import TodoList from "./componets/TodoList";

function App() {
  const [todos, setTodos] = useState([
    // "Go to the gym",
    // "Eat more fruits and vege",
    // "Pick up your babe",
  ]);
  const [todoValue, setTodoValue] = useState("");
  function persistData(newList){
    localStorage.setItem('todos',JSON.stringify({todos:newList}) )
  }

  function handleAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo];
    persistData(newTodoList)
    setTodos(newTodoList);
  }
  function handleDeleteTool(index) {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index;
    });
    persistData(newTodoList)
    setTodos(newTodoList);
  }
  function handleEditTool(index) {
    const valueToBeEdited = todos[index]; 
    setTodoValue(valueToBeEdited);
    handleDeleteTool(index);
  }

  useEffect(()=>{
    if(!localStorage){
        return
    }

    let localTodos =localStorage.getItem('todos')
    if (!localTodos){
        return
    }
    localTodos=JSON.parse(localTodos).todos
    setTodos(localTodos)
  },[])
  return (
    <>
      <TodoInput2
        todoValue={todoValue}
        setTodoValue={setTodoValue}
        handleAddTodos={handleAddTodos}
      />
      <TodoList
        handleEditTool={handleEditTool}
        handleDeleteTool={handleDeleteTool}
        todos={todos}
      />
    </>
  );
}

export default App;
