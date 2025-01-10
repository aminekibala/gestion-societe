import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Hero() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/users') // Utilisez l'URL correcte
            .then(response => {
                setUsers(response.data);
            })
            .catch(error => {
                console.error('Erreur lors de la récupération des utilisateurs :', error);
            });
    }, []);

    return (
        <div>
            <h1>Liste des utilisateurs</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default Hero;

