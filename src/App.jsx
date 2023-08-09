import "./App.css";
import MainPanel from "./components/MainPanel";
import CityPanel from "./components/CityPanel";
import Login from "./pages/Login";

function App() {
  return (
    <div className="app">
      <Login />
      <MainPanel />
      <CityPanel />
    </div>
  );
}

export default App;
