import { Draggable, Droppable } from "@hello-pangea/dnd";

import TodoItem from "./TodoItem";

export default ({ todos, removeTodo, updateTodo }) => {
    return (
        //overflow-hidden pasa propiedades a contenido anidado, o sea lo heredan
        <Droppable droppableId="todos">
            {(droppableProvided) => (
                <div
                    ref={droppableProvided.innerRef}
                    {...droppableProvided.droppableProps}
                    className="mt-8 max-h-[300px] overflow-hidden overflow-y-scroll rounded-t-md bg-white dark:bg-gray-700 transition-all duration-700 "
                >
                    {todos.map((todo, index) => (
                        <Draggable
                            key={todo.id}
                            index={index}
                            draggableId={`${todo.id}`}
                        >
                            {(draggableProvided) => (
                                <TodoItem
                                    todo={todo}
                                    removeTodo={removeTodo}
                                    updateTodo={updateTodo}
                                    ref={draggableProvided.innerRef} //luego del forwardRef, ya puede mandarse la ref al componente anidado
                                    {...draggableProvided.dragHandleProps}
                                    {...draggableProvided.draggableProps}
                                />
                            )}
                        </Draggable>
                    ))}
                    {droppableProvided.placeholder}
                </div>
            )}
        </Droppable>
    );
};
