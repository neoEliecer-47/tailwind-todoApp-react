export default ({ computedTodoNotCompleted, clearTodosCompleted }) => {
    return (
        <section className="flex justify-between rounded-b-md bg-white py-4 px-4 dark:bg-gray-700 transition-all duration-700">
            <span className="text-gray-500">{computedTodoNotCompleted} items left</span>
            <button className="text-gray-500 hover:text-purple-500 hover:font-semibold" onClick={clearTodosCompleted}>clear completed</button>
        </section>
    );
};

