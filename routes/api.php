<?php

use App\Http\Controllers\Api\AdminController;
use App\Http\Controllers\Api\ClientHomeController;
use App\Http\Controllers\Api\OrdersController;
use App\Http\Controllers\ApiTokenController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

 

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::middleware('auth:api')->post('/form',[ AdminController::class, 'store' ]);
Route::post('/login', [ApiTokenController::class,'update']);
Route::get('/property', [ClientHomeController::class,'index']);
Route::resource('newoder', [OrdersController::class]);
