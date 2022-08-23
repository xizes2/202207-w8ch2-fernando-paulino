import "./App.css";
import useApi from "./hooks/useApi";

function App() {
  const { getShips } = useApi("https://swapi.dev/api/starships");

  getShips();

  return (
    <div id="background-container">
      <h1 id="header-title">Star Wars Test</h1>
      <div id="main-container"></div>
    </div>
  );
}

export default App;
