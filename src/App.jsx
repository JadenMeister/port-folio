import React from 'react';
import Navbar from './components/Navbar';
import Header from "./components/Header.jsx";
import Info from './components/Info';
import Projects from './components/Projects';
import Tech from './components/Tech';
import Edu from './components/Edu.jsx';
import ColorModeToggle from "./components/ColorModeToggle.jsx";
const App = () => {
    return (
        <div className="App">
            <Navbar />
            <main>
                <section id ="/">
                    <Header/>
                </section>
                <section id="info" style={{position: "relative"}}>
                    <div className="toggle-mobile">  {/* 모바일용 toggle */}
                        <ColorModeToggle/>
                    </div>
                    <Info/>
                </section>
                <section id="tech">
                    <Tech/>
                </section>
                <section id="projects">
                    <Projects/>
                </section>
                <section id="education">
                    <Edu/>
                </section>
            </main>
        </div>
    );
};

export default App;