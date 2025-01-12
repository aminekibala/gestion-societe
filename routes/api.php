<?php

use App\Http\Controllers\Auth\LoginController;
use Illuminate\Routing\Route;
use App\Http\Controllers\ProductController;

Route::get('/api/products', [ProductController::class, 'index']);
Route::post('/login', [LoginController::class, 'login']);
Route::post('/logout', [LoginController::class, 'logout']);


