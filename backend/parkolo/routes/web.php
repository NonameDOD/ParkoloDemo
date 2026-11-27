<?php

use App\Http\Controllers\ParkingController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::resource('parkings', ParkingController::class);
Route::resource('users', UserController::class);
