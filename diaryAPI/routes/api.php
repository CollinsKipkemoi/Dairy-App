<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DiaryController;
use App\Http\Middleware\CorsMiddleware;

Route::middleware([CorsMiddleware::class])->group(function () {
    Route::apiResource('diaries', DiaryController::class);

    Route::get('/user', function (Request $request) {
        return $request->user();
    })->middleware('auth:sanctum');

    Route::options('{any}', function () {
        return response()->json([], 204);
    })->where('any', '.*');
});


Route::get('/test-cors', function () {
    return 'CORS is working!';
})->middleware(\App\Http\Middleware\CorsMiddleware::class);
