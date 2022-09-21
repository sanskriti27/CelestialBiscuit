// import logo from './logo.svg';
import "./App.css";
import Gallery from "./pages/Gallery";
// import Footer from "./Components/Footer";
// import Carousel from "./Components/Carousel";
// import Card from "./Components/Card";
import HomePage from "./pages/HomePage";
import Project from "./pages/Project";
import About from "./pages/About";

function App() {
  return (
    <div className="App">
      <HomePage />
       <Project/>
      <Gallery/>
      <About/>

    </div>
  );
}

export default App;
