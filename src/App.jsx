
import './App.css'
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Tech from "./components/Tech.jsx";
import Project from "./components/Project.jsx";
import Info from "./components/Info.jsx";
import Navbar from "./components/Navbar.jsx";


function App() {


  return (
    <>
        <Navbar/>
        <Header/>
        <Info/>
        <Tech/>
        <Project/>
        <Footer/>
    </>
  )
}

export default App
