import { useState } from "react"

function TodoForm({addTodo}){

    const [value, setValue] = useState("")
    const [category, setCategory] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!value || !category){return}
        console.log({value, category})
        addTodo(value, category)
        setCategory("")
        setValue("")
    }

    return(
        <div className="todoForm">
            <h2>Criar Tarefa: </h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Digite o título" onChange={(e)=>setValue(e.target.value)} value={value}/>
                <select onChange={(e)=>setCategory(e.target.value)} value={category}>
                    <option value="">Selecione uma categoria</option>
                    <option value="Trabalho">Trabalho</option>
                    <option value="Estudos">Estudos</option>
                    <option value="Pessoal">Pessoal</option>
                </select>
                <button type="submit">Criar Tarefa</button>
            </form>
        </div>
    )

}

export default TodoForm