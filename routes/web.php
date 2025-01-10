<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;

Route::get('/', function () {
    return view('welcome');
});




// Exemple de route pour obtenir une liste d'utilisateurs
// routes/api.php
Route::get('/users', [UserController::class, 'index']);

