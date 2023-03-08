import { DragDropContext} from "@hello-pangea/dnd";

import { useEffect, useState } from "react";
import Header from "./components/Header";

import TodoAdd from "./components/TodoAdd";
import TodoComputed from "./components/TodoComputed";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";



const initialStateTodos = JSON.parse(localStorage.getItem("todos")) || []


const reorder = (list, startIndex, endIndex) => {
    const result = [...list];
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

//<h1 className="text-center font-bold md:text-right">app</h1>;
const App = () => {
    const [todos, setTodos] = useState(initialStateTodos);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])

    const addTodo = (title) => {
        const newTodo = {
            id: Date.now(),
            title,
            completed: false
        }

        setTodos([...todos, newTodo])
        console.log(todos)
    }


    const removeTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const updateTodo = (id) => {                       //operador ternario retorna lo que esta en ? o :
        setTodos(todos.map((todo) => todo.id === id ? {...todo, completed: !todo.completed} : todo))
    }                                                 //id: todo.id, title: todo.title ---> spread operator con (...todo)


    const computedTodoNotCompleted = () =>  todos.filter((todo) => !todo.completed).length
                                                //con filter, filtramos todos los que en completed sean false y los contamos con length

    const clearTodosCompleted = () => {
        setTodos(todos.filter((todo) => !todo.completed))
    }


    const [filter, setFilter] = useState("all")

    const filterTodos = () => {
        switch (filter) {
            case "all":
                return todos
            case "active":
                return todos.filter((todo) => !todo.completed)
            case "completed":
                return todos.filter((todo) => todo.completed)
        
            default:
                return todos;
        }
    }


    const changeFilterTodos = (filter) => setFilter(filter)

    const handleDragEnd = (result) => {
        const { destination, source } = result;
        if (!destination) return;
        if (
            source.index === destination.index &&
            source.droppableId === destination.droppableId
        )
            return;

        setTodos((prevTasks) =>
            reorder(prevTasks, source.index, destination.index)
        );
    };


    return (
        <div className="transition-all duration-700 min-h-screen bg-gray-300 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat dark:bg-gray-800 dark:bg-[url('./assets/images/bg-mobile-dark.jpg')] md:bg-[url('./assets/images/bg-desktop-light.jpg')] dark:md:bg-[url('./assets/images/bg-desktop-dark.jpg')]">
            <Header />
            <main className="container mx-auto mt-9 px-4 md:max-w-xl">
                <TodoAdd addTodo={addTodo}/>

                <DragDropContext onDragEnd={handleDragEnd}>
                        <TodoList
                        todos={filterTodos()}//se le pasan los corchetes para que se ejecute de una vez
                        removeTodo={removeTodo}
                        updateTodo={updateTodo} 
                        />
                </DragDropContext>

                <TodoComputed
                  computedTodoNotCompleted={computedTodoNotCompleted()}
                  clearTodosCompleted={clearTodosCompleted} />

                <TodoFilter changeFilterTodos={changeFilterTodos} filter={filter}/>
            </main>
            <footer className="mt-8 text-center font-bold text-gray-500">
                drag and drop to reorder list
            </footer>
        </div>
    );
};

export default App;
