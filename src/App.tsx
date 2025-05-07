import { Globe, MoonIcon, SunIcon } from "lucide-react";
import { useStore } from "./data/store";
import { useEffect } from "react";

function App() {
  const { text, setText, isDark, toggleDarkMode, initializeDarkMode } =
    useStore();

  // Initialize dark mode based on system preference
  useEffect(() => {
    initializeDarkMode();
  }, [initializeDarkMode]);

  return (
    <>
      <div className="m-5 flex items-baseline gap-2">
        <h1 className="text-xl">{text}</h1>
        <button
          onClick={() => setText("Hello World")}
          className="cursor-pointer"
        >
          <Globe size={20} className="text-peach animate-spin" />
        </button>
      </div>

      <div className="bg-mantle absolute bottom-5 left-5 w-fit space-x-2 rounded-md p-2">
        <button
          className={`${!isDark ? "bg-crust text-yellow" : ""} rounded-md p-2`}
          onClick={toggleDarkMode}
        >
          <SunIcon size={20} />
        </button>
        <button
          className={`${isDark ? "bg-crust text-blue" : ""} rounded-md p-2`}
          onClick={toggleDarkMode}
        >
          <MoonIcon size={20} />
        </button>
      </div>
    </>
  );
}

export default App;
