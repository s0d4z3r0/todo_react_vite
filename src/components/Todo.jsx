const Todo = ({ todos, completeTodo, removeTodo, setModalRemove, setRemoveTodoId }) => {

  const handleRemove = (todoId) => {
    removeTodo(todoId)
    setModalRemove(true)
    setRemoveTodoId(todoId)
  }

  return (
    <>
      <div
        className={`todo d-flex justify-content-between rounded-1 px-3 ${
          todos.isCompleted ? "completed" : "notCompleted"
        }`}
      >
        <div className="content pt-3">
          <ul className="ps-0">
            <h3 className="text fw-bold fs-5">{todos.text}</h3>
            <p className="category text-body-tertiary">{todos.category}</p>
          </ul>
        </div>

        <div className="buttons d-flex align-items-center gap-2">
          <button
            type="button"
            className="btn complete"
            onClick={() => completeTodo(todos.id)}
          >
            <i className="bi bi-check-lg"></i>
          </button>
          <button
            type="button"
            className="btn delete"
            onClick={() => handleRemove(todos.id)}
          >
            <i className="bi bi-trash"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default Todo;
