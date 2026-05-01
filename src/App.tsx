import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import StartProjectPage from './components/StartProjectPage';

function Home() {
    return (
        <>
            <Hero />
            <Services />
            <Projects />
        </>
    );
}

export default function App() {
    return (
        <>
            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/start-project" element={<StartProjectPage />} />
            </Routes>
        </>
    );
}