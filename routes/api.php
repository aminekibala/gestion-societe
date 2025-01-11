<?php

use App\Http\Controllers\Auth\LoginController;
use Illuminate\Routing\Route;

Route::post('/login', [LoginController::class, 'login']);
Route::post('/logout', [LoginController::class, 'logout']);


