<?php

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
//
//Route::get('/', function () {
//    return view('TestView');
//});


Route::get('/{any}', 'AppController@index')->where('any', '.*');

//Auth::routes();

//Route::get('/home', 'HomeController@index')->name('home');

//Route::get('/test', 'HomeController@index')->name('test');
//Route::get('/{any}', 'AppController@index')->where('any', '/.*/');



//Route::get('/test{id}', 'HomeController@index')->name('test2');
//Route::get('/test/testing/{id}', 'HomeController@index')->name('test3');

