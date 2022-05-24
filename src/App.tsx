import "./App.css";
import { useTheme } from "./hooks/useTheme";

const AppChildren = () => {
  const { color } = useTheme();
  return <h2 style={{ color }}>Soy un hijo de App</h2>;
};

function App() {
  const { color, setColor } = useTheme();

  return (
    <div className="App">
      <h1 style={{ color }}>Hola mundo</h1>
      <AppChildren />
      <button
        onClick={() => {
          setColor("green");
        }}
      >
        Cambiame el color
      </button> 
    </div>
  );
}

export default App;
