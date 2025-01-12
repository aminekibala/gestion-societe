import React from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

// Enregistrement des composants nécessaires de Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const DashboardPage = () => {
    // Données pour le graphique
    const chartData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
            {
                label: 'Ventes',
                data: [30, 50, 40, 70, 90, 100],
                borderColor: '#7AB2D3',
                backgroundColor: 'rgba(122, 178, 211, 0.3)',
                fill: true,
                tension: 0.3,
            },
        ],
    };

    const chartOptions = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                labels: {
                    color: '#4A628A',
                },
            },
        },
        scales: {
            x: {
                ticks: {
                    color: '#4A628A',
                },
            },
            y: {
                ticks: {
                    color: '#4A628A',
                },
            },
        },
    };

    return (
        <div className="bg-[#DFF2EB] min-h-screen p-6">
            {/* En-tête */}
            <header className="bg-[#B9E5E8] p-6 rounded-lg shadow mb-6">
                <h1 className="text-3xl font-bold text-[#4A628A]">
                    Dashboard Minimal
                </h1>
            </header>

            {/* Cartes avec des statistiques */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg shadow hover:scale-105 transform transition-transform duration-300">
                    <h3 className="text-xl font-bold text-[#4A628A]">Total Utilisateurs</h3>
                    <p className="text-2xl font-bold mt-2">150</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow hover:scale-105 transform transition-transform duration-300">
                    <h3 className="text-xl font-bold text-[#4A628A]">Nouveaux Produits</h3>
                    <p className="text-2xl font-bold mt-2">34</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow hover:scale-105 transform transition-transform duration-300">
                    <h3 className="text-xl font-bold text-[#4A628A]">Commandes Aujourd'hui</h3>
                    <p className="text-2xl font-bold mt-2">12</p>
                </div>
            </div>

            {/* Graphique */}
            <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold text-[#4A628A] mb-4">Performance des Ventes</h3>
                <Line data={chartData} options={chartOptions} />
            </div>
        </div>
    );
};

export default DashboardPage;
