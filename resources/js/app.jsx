import React from 'react';
import ReactDOM from 'react-dom/client';
import Hero from './components/Hero';

function App() {
    return <Hero />
}

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<App />);
