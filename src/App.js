import logo from './logo.svg';
import './App.css';
import './App.css';
import Logofalling from "./components/logofalling";
import Projects from "./components/Pages/Projects/projects";
import TypeAnim from "./components/typeanim";
import Nav from "./components/Navbar/nav";
import Skills from "./components/Pages/Skills/skills";
import Contact from "./components/Pages/Contact/Contact";

function App() {
  return (
    <div className="App">
      <div className="canvas-container">
          <Logofalling />
          <TypeAnim />
          <Nav />
      </div>
        {/*<Skills />*/}
        {/*<Contact />*/}
        {/*<Projects />*/}
    </div>
  );
}

export default App;
