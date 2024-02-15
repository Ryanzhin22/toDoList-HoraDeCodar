function Todo({todo, removeTodo, completeTodo}){

    return(
        <div className='todo' style={{textDecoration: todo.isCompleted ? "line-through" : ""}}>
          <div className="todoContent">
            <p>{todo.text}</p>
            <p className='todoCategory'>({todo.category})</p>
          </div>
          <div className="botoes">
            <button className="complete" onClick={() => completeTodo(todo.id)}>Confirmar</button>
            <button className="remove" onClick={() => removeTodo(todo.id)}>X</button>
          </div>
        </div>
    )

}

export default Todo