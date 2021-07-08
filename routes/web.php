<?php

use App\Http\Controllers\Api\AdminController;
use App\Http\Controllers\Web\AuthController;
use App\Http\Controllers\Web\ClientController;
use App\Http\Controllers\Web\OrdersController;
use App\Http\Controllers\Web\PropertiesController;
use App\Mail\SendMail;
use Illuminate\Support\Facades\Artisan;
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
Route::post('loginres',[AuthController::class, 'login']);
Route::post('registerres',[AuthController::class, 'register']);
Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
Route::resource('index', ClientController::class); 
Route::get('/new', [PropertiesController::class, 'create']); 
Route::resource('properties', PropertiesController::class);

Route::get('order', [OrdersController::class,'index'] );
Route::get('/foo', function () {
    Artisan::call('storage:link');
    
    
    });