import logo from "./logo.svg";
import "./App.css";
import Weather from "./Weather.js";

function App() {
  return (
    <div className="App">
      <h1> Weather App</h1>
      <Weather />
      <footer>
        This Project was coded by Ana Zabaleta and is{" "}
        <a href="https://github.com/Zana2234/Weather-react-app.git">
          open-sourced on GitHub
        </a>
      </footer>
    </div>
  );
}

export default App;
