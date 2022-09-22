// import logo from './logo.svg';
import "./App.css";
import Gallery from "./pages/Gallery";
// import Footer from "./Components/Footer";
// import Carousel from "./Components/Carousel";
// import Card from "./Components/Card";
import HomePage from "./pages/HomePage";
import Project from "./pages/Project";
import About from "./pages/About";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Nbar from "./Components/Nbar";


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
      
      


    </div>
  );
}

export default App;
