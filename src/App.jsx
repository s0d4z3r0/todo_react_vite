import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState, useEffect } from "react";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";
import Search from "./components/Search";
import Confirm from "./components/Confirm";
import Footer from "./components/Footer";

function App() {
  // Criar lista de tarefas
  const [todos, setTodos] = useState([]);

  // Cria state para o search
  const [search, setSearch] = useState("");

  // States para modal de remover tarefa
  const [modalRemove, setModalRemove] = useState(false)
  const [removeTodoId, setRemoveTodoId] = useState(false)
  const [newTodosToRemove, setNewTodosToRemove] = useState('')

  // Função para adicionar
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

  // Função para setar a lista de tarefas existentes
    const removeTodo = () => {
        setNewTodosToRemove([...todos])
  }

  // Função para alterar o estado da tarefa para concluído
  const completeTodo = (id) => {
    const newTodos = [...todos];
    newTodos.map((todo) =>
      todo.id == id ? (todo.isCompleted = !todo.isCompleted) : todo
    );
    setTodos(newTodos);
  };

// Cria um state para verificar o width da tela
  const [width, setWidth] = useState('')

  // Função para alterar o state do Width
  const updatePageWidth = () => {
    setWidth(window.innerWidth)
  }

  // Effect para monitorar quando o width for alterado
  useEffect(() => {
    updatePageWidth()
    window.addEventListener('resize', updatePageWidth)

    return () => {
      window.removeEventListener('resize', updatePageWidth)
    }
  }, [width])


  return (
    <div className="app pb-5">
      {modalRemove ? (
        <Confirm setModalRemove={setModalRemove} removeTodoId={removeTodoId} newTodosToRemove={newTodosToRemove} setTodos={setTodos}/>
      ) : ('')}
      <div className="todos container p-5 rounded-4 shadow-lg mb-5 w-75">
        <h1 className="text-center fw-bold fs-1 mb-5">Lista de Tarefas</h1>

        <div className="todo-form">
          <TodoForm addTodo={addTodo} width={width}/>
        </div>

        <div className="search-form pb-4 mb-4 border-bottom border-secondary border-3 border-opacity-25">
          <Search search={search} setSearch={setSearch} width={width}/>
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
      <Footer/>
    </div>
  );
}

export default App;
