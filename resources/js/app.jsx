import React from 'react';
import ReactDOM from 'react-dom/client';
import Hero from './components/Hero';
import Products from './components/Products';

function App() {
    return (<><Products/>
    <Hero/>


    </>);
    
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);