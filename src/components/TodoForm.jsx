import { useState } from "react";

const TodoForm = ({addTodo}) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");

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
            <label className="input-group-text bg-warning-subtle fw-bold col-2 justify-content-center" htmlFor="inputGroupText">Tarefa</label>
            <input type="text" placeholder="Digite a tarefa" id="inputGroupText" onChange={(e) => setTitle(e.target.value)} value={title} className="form-control shadow-none "/>
        </div>
        <div className="input-group">
            <label className="input-group-text bg-warning-subtle fw-bold col-2 justify-content-center" htmlFor="inputGroupSelect">Categoria</label>
            <select onChange={(e) => setCategory(e.target.value)} value={category} className="selectCategory form-select shadow-none" id="inputGroupSelect">
              <option value="" disabled>Selecione uma categoria</option>
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
