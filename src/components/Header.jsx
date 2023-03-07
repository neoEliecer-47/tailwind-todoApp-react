import { useEffect, useState } from "react"
import MoonIcon from "./icons/MoonIcon"
import SunIcon from "./icons/sunIcon"



const initialStateDarkMode = localStorage.getItem("theme") === "dark" ? true : false




const Header = () => {
    const [darkMode, setDarkMode] = useState(initialStateDarkMode)
    
   useEffect(() => {

    if(darkMode) {

        document.documentElement.classList.add("dark")
        localStorage.setItem("theme", "dark")
    }
    else{

        document.documentElement.classList.remove("dark")
        localStorage.setItem("theme", "light")
    } 

   }, [darkMode])
    
    return (
        <header className="container mx-auto px-4 pt-9 md:max-w-xl">
                <div className="flex justify-between">
                    <h1 className=" text-3xl font-semibold uppercase tracking-[0.5em] text-white">
                        todo
                    </h1>
                    <button onClick={() => setDarkMode(!darkMode)}>
                        {
                            darkMode ? <SunIcon className="hover:fill-yellow-300 shadow-2xl transition-all duration-500"/> : <MoonIcon className="hover:fill-blue-500 shadow-2xl transition-all duration-500"/>
                        }
                    </button>
                </div>
        </header>
    )
}

export default Header