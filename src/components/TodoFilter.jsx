const TodoFilter = ({ changeFilterTodos, filter }) => {
    return (
        <section className="container mx-auto mt-4 ">
            <div className="flex justify-center gap-4 rounded-md bg-white p-4 font-bold dark:bg-gray-700 transition-all duration-700">
                <button
                    className={`${
                        filter === "all"
                            ? "text-blue-600"
                            : "text-gray-500 hover:text-blue-600"
                    }`}
                    onClick={() => changeFilterTodos("all")}
                >
                    All
                </button>
                <button
                    className={`${
                        filter === "active"
                            ? "text-blue-600"
                            : "text-gray-500 hover:text-blue-600"
                    }`}
                    onClick={() => changeFilterTodos("active")}
                >
                    Pending
                </button>
                <button
                    className={`${
                        filter === "completed"
                            ? "text-blue-600"
                            : "text-gray-500 hover:text-blue-600"
                    }`}
                    onClick={() => changeFilterTodos("completed")}
                >
                    Completed
                </button>
            </div>
        </section>
    );
};

export default TodoFilter;
