<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ProductController;
Route::get('/', function () {
    return view('app');
});





// Exemple de route pour obtenir une liste d'utilisateurs
// routes/api.php
Route::get('/users', [UserController::class, 'index']);


Route::get('/api/products', [ProductController::class, 'index']);


