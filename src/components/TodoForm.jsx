import { useState } from "react";

const TodoForm = ({addTodo, width}) => {

  // Seta Título e Categoria
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");

  // Função para adicionar tarefa à lista de tarefas com verificação se campo vazio e reset de states
  const handleSubmit = (e) => {
    e.preventDefault();

    if(!title || !category){
        return
    }

    addTodo(title, category)
    setTitle("")
    setCategory("")
  };

  return (
    <div className="todo-form">
      <h4 className="fw-bold">Criar tarefa:</h4>
      <form onSubmit={handleSubmit} className=" d-flex flex-column pb-4 gap-2">
        <div className="input-group">
            <label className="todo input-group-text fw-bold col-2 justify-content-center border border-0" htmlFor="inputGroupText">
              <span>Tarefa</span>
              <i className="bi bi-clipboard-plus d-none"></i>
              </label>
            <input type="text" placeholder={width <= 500 ? '+ Tarefa...' : "Digite a tarefa"} id="inputGroupText" onChange={(e) => setTitle(e.target.value)} value={title} className="inputTodo form-control shadow-none border"/>
        </div>
        <div className="input-group">
            <label className="category input-group-text fw-bold col-2 justify-content-center border border-0" htmlFor="inputGroupSelect">
              <span>Categoria</span>
              <i className="bi bi-bookmark d-none"></i>
              </label>
            <select onChange={(e) => setCategory(e.target.value)} value={category}  className="selectCategory form-select shadow-none border" id="inputGroupSelect">
              <option value="" className="firstOption"disabled>{width <= 500 ? 'Categoria...' : 'Selecione uma categoria'}</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Estudo">Estudo</option>
              <option value="Pessoal">Pessoal</option>
            </select>
        </div>
        <button type="submit" className="btn create">Criar tarefa</button>
      </form>
    </div>
  );
};

export default TodoForm;
