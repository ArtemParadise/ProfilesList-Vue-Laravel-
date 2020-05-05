<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

//Route::group(['prefix' => '/v1', 'namespace' => '', 'as' => 'api.'], function () {
//    Route::resource('profiles', 'ProfilesController', ['except' => ['create', 'edit']]);
//});

//list of profiles
Route::get('/profiles', 'ProfilesController@index');

//Create profile
Route::post('/profiles/create', 'ProfilesController@store');

//Show profile
Route::get('/profiles/{id}', 'ProfilesController@show');

//Edit profile
Route::get('/profiles/edit/{id}', 'ProfilesController@edit');

//Update profile
//Route::put('/profiles', 'ProfilesController@store');
Route::put('/profiles/{id}', 'ProfilesController@update');

//Delete
Route::delete('/profiles/{id}', 'ProfilesController@destroy');
