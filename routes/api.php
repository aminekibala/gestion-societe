<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;

// Exemple de route pour obtenir une liste d'utilisateurs
// routes/api.php
Route::get('/users', [UserController::class, 'index']);

