import React from 'react';
import Navbar from './components/Navbar';
import Header from "./components/Header.jsx";
import Info from './components/Info';
import Projects from './components/Projects';
import Tech from './components/Tech';

const App = () => {
    return (
        <div className="App">
            <Navbar />
            <main>
                <section id ="/">
                    <Header/>
                </section>
                <section id="info">
                    <Info/>
                </section>
                <section id="tech">
                    <Tech/>
                </section>
                <section id="projects">
                    <Projects/>
                </section>
            </main>
        </div>
    );
};

export default App;