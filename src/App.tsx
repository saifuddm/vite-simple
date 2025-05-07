import { Globe } from "lucide-react";
import { useStore } from "./data/store";

function App() {
  const { text, setText } = useStore();
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
    </>
  );
}

export default App;
