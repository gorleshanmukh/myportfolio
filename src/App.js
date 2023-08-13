import logo from './logo.svg';
import './App.css';
import './App.css';
import Logofalling from "./components/logofalling";
import Projects from "./components/Pages/Projects/projects";
import TypeAnim from "./components/typeanim";
import Nav from "./components/Navbar/nav";
import Skills from "./components/Pages/Skills/skills";
import Contact from "./components/Pages/Contact/Contact";
import {Route, Routes} from "react-router-dom";
import ResumeBuilder from "./ResumeBuilder/resumebuilder";

function App() {
  return (
    <Routes>
        <Route path="/" element={(
            <div className="App">
                <div className="canvas-container">
                    <Logofalling />
                    <TypeAnim />
                </div>
                <Skills />
                <Contact />
                {/*<Projects />*/}
            </div>
        )}/>
        <Route path="/resumebuilder" element={<ResumeBuilder />}/>
    </Routes>
  );
}

export default App;
