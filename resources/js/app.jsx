import React from 'react';
import ReactDOM from 'react-dom/client';
import Hero from './components/Hero';
import Products from './components/Products';
import Dashboard from './pages/DashboardPage';

function App() {
    return (<>
    <Dashboard></Dashboard>


    </>);
    
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);