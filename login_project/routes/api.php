<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CountryController;
use App\Http\Controllers\StateController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\Controller;



Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get('/countries', [CountryController::class, 'countries']);
Route::get('/states/{countryId}', [StateController::class, 'states']);
Route::post('/submit-form', [UserController::class, 'submitForm']);
