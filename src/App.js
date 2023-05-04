import logo from './logo.svg';
import './App.css';
import Logofalling from "./components/logofalling";
import Projects from "./components/projects";
import TypeAnim from "./components/typeanim";
import Nav from "./components/nav";

function App() {
  return (
    <div className="App">
      <div className="canvas-container">
          <Logofalling />
          <TypeAnim />
          {/*<Nav />*/}
      </div>
        <Projects />
    </div>
  );
}

export default App;
