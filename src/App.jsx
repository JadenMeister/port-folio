import React from 'react';
import Navbar from './components/Navbar';
import Info from './components/Info';
import Projects from './components/Projects';
import Tech from './components/Tech';

const App = () => {
    return (
        <div className="App">
            <Navbar />
            <main>

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