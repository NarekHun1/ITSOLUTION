import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import StartProjectPage from './components/StartProjectPage';
import ServicesPage from './components/Services';
import AIChatWidget from './components/AIChatWidget';
import ContactPage from './components/ContactPage';
import ProcessPage from './components/ProcessPage';

function Home() {
    return (
        <>
            <Hero />
            <Projects />
            <AIChatWidget />
        </>
    );
}

export default function App() {
    return (
        <>
            <Header />

            <Routes>
                <Route path="/" element={<Home />} />

                <Route
                    path="/services"
                    element={<ServicesPage />}
                />

                <Route
                    path="/process"
                    element={<ProcessPage />}
                />

                <Route
                    path="/contact"
                    element={<ContactPage />}
                />

                <Route
                    path="/start-project"
                    element={<StartProjectPage />}
                />
            </Routes>
        </>
    );
}