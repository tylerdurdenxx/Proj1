import { BrowserRouter } from "react-router-dom"

import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <AnimatedRoutes/> 
    <Footer/>

    </BrowserRouter>
  );
}

export default App
