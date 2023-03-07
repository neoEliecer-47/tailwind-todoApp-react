
import TodoItem from "./TodoItem";

export default ({todos, removeTodo, updateTodo}) => {
    return (
        //overflow-hidden pasa propiedades a contenido anidado, o sea lo heredan 
        <div className="mt-8 max-h-[300px] rounded-t-md overflow-hidden overflow-y-scroll dark:bg-gray-500-overflow-scroll bg-white dark:bg-gray-700 transition-all duration-700">
            {
                todos.map((todo) => (

                    <TodoItem key={todo.id} todo={todo} removeTodo={removeTodo} updateTodo={updateTodo}/>
                ))
            }
          </div>
    );
};
