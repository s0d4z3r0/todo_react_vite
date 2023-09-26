import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";
import Search from "./components/Search";
import Confirm from "./components/Confirm";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Criar funcionalidade X no sistema",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Estudar JavaScript",
      category: "Estudo",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Ir para academia",
      category: "Pessoal",
      isCompleted: false,
    },
  ]);

  const [search, setSearch] = useState("");

  const [modalRemove, setModalRemove] = useState(false)
  const [removeTodoId, setRemoveTodoId] = useState(false)
  const [newTodosToRemove, setNewTodosToRemove] = useState('')

  const addTodo = (text, category) => {
    const newTodos = [
      ...todos,
      {
        id: Math.floor(Math.random() * 10000),
        text,
        category,
        isCompleted: false,
      },
    ];
    setTodos(newTodos);
  };

    const removeTodo = (id) => {
        const newTodos = [...todos];
        setNewTodosToRemove(newTodos)
  }

  const completeTodo = (id) => {
    const newTodos = [...todos];
    newTodos.map((todo) =>
      todo.id == id ? (todo.isCompleted = !todo.isCompleted) : todo
    );
    setTodos(newTodos);
  };

  return (
    <div className="app">
      {modalRemove ? (
        <Confirm setModalRemove={setModalRemove} removeTodoId={removeTodoId} newTodosToRemove={newTodosToRemove} setTodos={setTodos}/>
      ) : ('')}
      <div className="todos container p-5 rounded-2 shadow-lg mb-5 w-75">
        <h1 className="text-center fw-bold fs-1 mb-5">Lista de Tarefas</h1>

        <div className="todo-form">
          <TodoForm addTodo={addTodo} />
        </div>

        <div className="search-form pb-4 mb-4 border-bottom border-secondary border-3 border-opacity-25">
          <Search search={search} setSearch={setSearch} />
        </div>

        <div className="todo-list d-flex flex-column gap-2">
          {todos
            .filter((todo) =>
              todo.text.toLowerCase().includes(search.toLowerCase())
              )
              .map((todo) => (
                <Todo
                key={todo.id}
                todos={todo}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
                setModalRemove={setModalRemove}
                setRemoveTodoId={setRemoveTodoId}
                />
                ))}
        </div>
      </div>
    </div>
  );
}

export default App;
