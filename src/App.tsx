import { Globe } from "lucide-react";
import { useStore } from "./data/store";

function App() {
  const { text, setText } = useStore();
  return (
    <>
      <div className="m-5 flex items-baseline gap-2">
        <h1 className="text-xl">{text}</h1>
        <button onClick={() => setText("Hello World")}>
          <Globe size={20} color="white" className="animate-spin" />
        </button>
      </div>
    </>
  );
}

export default App;
