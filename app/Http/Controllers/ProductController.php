<?php

namespace App\Http\Controllers;

use App\Models\Product; // Assurez-vous que le modèle est bien lié à votre table
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index()
    {
        // Récupérer tous les produits
        $products = Product::all();

        // Retourner les données au format JSON
        return response()->json($products);
    }
}
