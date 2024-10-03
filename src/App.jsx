
import './App.css'
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Tech from "./components/Tech.jsx";
import Projects from "./components/Projects.jsx";
import Info from "./components/Info.jsx";
import Navbar from "./components/Navbar.jsx";


function App() {

    return (
        <div className="App">
        <Navbar />
        <Header />
        <Projects />
        <Tech />
        <Info />
        <Footer />
        </div>
    )
}

export default App
