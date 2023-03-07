import CheckIcon from "./icons/CheckIcon";
import CrossIcon from "./icons/CrossIcon";

const TodoItem = ({ todo, updateTodo, removeTodo }) => {
    const { id, title, completed } = todo;//CARA2427176482949
    //582127201324 --> linea de ayuda biometric visa

    return (
        //template string
        <article className="flex gap-4 border-b border-b-gray-400 py-4 px-4">
            <button
                className={`inline-block h-6 w-6 rounded-full border-2 ${
                    completed &&
                    "grid place-items-center bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"
                }`}
                
                onClick={() => updateTodo(id)}
            >
                {completed && <CheckIcon />}
            </button>
            <p
                className={`grow  ${
                    completed ? "text-gray-400 line-through" : "text-gray-700 dark:text-gray-400"
                }`}
            >
                {title}
            </p>
            <button onClick={() => removeTodo(id)} className="flex-none">
                {" "}
                <CrossIcon />
            </button>
        </article>
    );
};

export default TodoItem;
