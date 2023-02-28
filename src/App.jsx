import CrossIcon from "./components/icons/CrossIcon";
import MoonIcon from "./components/icons/MoonIcon";

//<h1 className="text-center font-bold md:text-right">app</h1>;
const App = () => {
    return (
        <div className="min-h-screen bg-gray-300 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat">
            <header className="container mx-auto px-4 pt-9">
                <div className="flex justify-between">
                    <h1 className=" text-3xl font-semibold uppercase tracking-[0.5em] text-white">
                        todo
                    </h1>
                    <button> <MoonIcon className="fill-red-700" /> </button>
                </div>
                <form
                    action=""
                    className="mt-9 flex items-center gap-4 overflow-hidden rounded-md bg-white py-4 px-4"
                >
                    <span className="inline-block h-5 w-5 rounded-full border-2"></span>
                    <input
                        className="w-full text-gray-400 outline-none"
                        type="text"
                        placeholder="Create a new todo..."
                    />
                </form>
            </header>{" "}
            <main className="container mx-auto mt-9 px-4 ">
                <div className="rounded-md bg-white">
                    <article className="flex gap-4 border-b border-b-gray-400 py-4 px-4">
                        <button className="inline-block h-5 w-5 rounded-full border-2"></button>
                        <p className="grow text-gray-500">
                            Complete online JavaScript course Neo ELiecer
                        </p>
                        <button>
                            {" "}
                            <CrossIcon />{" "}
                        </button>
                    </article>
                    <article className="flex gap-4 border-b border-b-gray-400 py-4 px-4">
                        <button className="inline-block h-5 w-5 rounded-full border-2"></button>
                        <p className="grow text-gray-500">
                            Complete online node js course Neo ELiecer
                        </p>
                        <button>
                            {" "}
                            <CrossIcon />{" "}
                        </button>
                    </article>

                    <section className="flex justify-between py-4 px-4">
                        <span className="text-gray-400">5 items left</span>
                        <button className="text-gray-400">
                            clear completed
                        </button>
                    </section>
                </div>
            </main>
            <section className="container mx-auto mt-4 px-4">
                <div className="bg-white p-4 rounded-md flex gap-4 justify-center font-bold">
                    <button className="text-blue-600">All</button>
                    <button className="hover:text-blue-600">Active</button>
                    <button className="hover:text-blue-600">Completed</button>
                </div>
            </section>
            <p className="text-center mt-8 font-bold text-gray-400">drag and drop</p>
        </div>
    );
};

export default App;
