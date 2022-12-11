import "./App.css";
import Gallery from "./pages/Gallery";
import HomePage from "./pages/HomePage";
import Project from "./pages/Project";
import About from "./pages/About";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Nbar from "./Components/Nbar";
import Subscribe from "./Components/Subscribe";


function App() {
  return (
    <div className="App"> 
      <Router>
      <Nbar/>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="project/*" element={<Project/>}/>
            <Route path="about/*" element={<About/>}/>
            <Route path="gallery/*" element={<Gallery/>}/>
          </Routes>
      </Router>
      <Subscribe/>
    </div>
  );
}

export default App;
