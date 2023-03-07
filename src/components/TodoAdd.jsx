import { useState } from "react";

const TodoAdd = ({ addTodo }) => {
    const [title, setTitle] = useState("");

    const handleSubmitAddTodo = (e) => {
        e.preventDefault();
        if (!title.trim()) {
            //addTodo(title)
            console.log("campo vacio");
            return setTitle("");
        }
        addTodo(title.trim());
        setTitle("");
    };

    return (
        <form
            onSubmit={handleSubmitAddTodo}
            action=""
            className="dark:bg-gray-700 mt-9 flex items-center gap-4 overflow-hidden rounded-md bg-white py-4 px-4 transition-all duration-700"
        >
            <span className="inline-block h-5 w-5 rounded-full border-2"></span>
            <input
                className="w-full text-gray-400 outline-none dark:bg-gray-700 transition-all duration-700"
                type="text"
                placeholder="Create a new todo..."
                value={title}
                onChange={(e) => setTitle(e.target.value)} //el onchange es el que esta pendiente de cada click, lo relacionamos por medio del state
            />
        </form>
    );
};

export default TodoAdd;
