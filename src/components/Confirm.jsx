
const Confirm = ({setModalRemove, removeTodoId, newTodosToRemove, setTodos}) => {
  const handleRemoveTodoId = (id) => {
      const newTodos = newTodosToRemove;
      const filteredTodos = newTodos.filter((todo) =>
        todo.id !== id ? todo : null
      );
      setTodos(filteredTodos);
      setModalRemove(false)
  }

  return (
    <div className="confirm position-fixed z-1 top-0 start-0 w-100 h-100">
        <div className="confirm_bg position-fixed z-1 bg-dark bg-gradient bg-opacity-50 w-100 h-100"></div>
        <div className="confim_content border rounded-2 bg-light position-fixed z-2 top-50 start-50 translate-middle d-flex flex-column justify-content-around w-25 p-4">
            <h4 className="fs-4 text-center">Deseja realmente excluir a tarefa?</h4>
            <div className="buttons d-flex gap-2">
              <button type="button" className="w-50 btn btn-success" onClick={() => handleRemoveTodoId(removeTodoId)}>SIM</button>
              <button type="button" className="w-50 btn btn-danger" onClick={() => setModalRemove(false)}>NOT</button>
            </div>
        </div>
    </div>
  )
}

export default Confirm