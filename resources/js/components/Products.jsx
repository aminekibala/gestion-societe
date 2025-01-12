import React, { useState, useEffect } from "react";
import axios from "axios";

const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Récupérer les données de l'API
    useEffect(() => {
        axios
            .get("http://127.0.0.1:8000/api/products") // Votre API
            .then((response) => {
                setProducts(response.data); // Stocker les produits
                setLoading(false);
            })
            .catch((err) => {
                setError("Erreur lors de la récupération des produits.");
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p className="text-center text-gray-500">Chargement des produits...</p>;
    }

    if (error) {
        return <p className="text-center text-red-500">{error}</p>;
    }

    return (
        <div className="max-w-6xl mx-auto mt-10 px-4">
            <h1 className="text-3xl font-bold text-center mb-6">Liste des Produits</h1>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                    <li
                        key={product.id}
                        className="bg-white shadow-md rounded-lg p-4 flex flex-col justify-between"
                    >
                        <div>
                            <h2 className="text-lg font-bold">{product.name}</h2>
                            <p className="text-gray-600">{product.description}</p>
                            <p className="text-sm text-gray-500">
                                Catégorie : {product.category}
                            </p>
                            <p className="text-sm text-gray-500">
                                Date d'expiration : {new Date(product.expiration_date).toLocaleDateString()}
                            </p>
                        </div>
                        <div className="mt-4 flex justify-between items-center">
                            <p className="text-xl font-bold text-blue-600">{product.price}€</p>
                            <span className="text-sm text-gray-500">
                                {product.quantity} en stock
                            </span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Products;
