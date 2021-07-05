<?php

use App\Http\Controllers\Api\AdminController;
use App\Http\Controllers\Web\ClientController;
use App\Http\Controllers\Web\PropertiesController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/',  [ClientController::class, 'index']);
Auth::routes();
Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
Route::resource('index', ClientController::class);
// Route::get('/properties', [AdminController::class, 'index']);
Route::get('/new', [PropertiesController::class, 'create']);
// Route::get('/properties', [PropertiesController::class, 'index']);
Route::resource('properties', PropertiesController::class);