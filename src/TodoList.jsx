import TodoItem from "./TodoItem"

const TodoList = ({todos, toggleTodo, deleteTodo}) => {


    return (
        <>
            <ul className='List'>
                {todos.length == 0 && "No Todos"}

                {todos.map(todo =>
                    <TodoItem 
                        key={todo.id} 
                        {...todo}
                        // id={todo.id} 
                        // title={todo.title} 
                        // completed={todo.completed} 
                        deleteTodo={deleteTodo}
                        toggleTodo={toggleTodo}
                    />
                )}
            </ul>
        </>
    );
}

export default TodoList;