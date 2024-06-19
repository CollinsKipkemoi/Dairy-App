<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DiaryController;
use App\Http\Middleware\CorsMiddleware;
use Illuminate\Http\Request;



Route::get('/', function () {
    return view('welcome');
});

// API Routes
Route::get("/api/diaries", [
    DiaryController::class, "index"
]);
