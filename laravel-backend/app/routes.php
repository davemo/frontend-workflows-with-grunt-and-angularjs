<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/

Route::get('/api/books', array('before' => 'auth', function() {
  return Response::json(array(
    array('title' => 'Great Expectations', 'author' => 'Dickens'),
    array('title' => 'Foundation', 'author' => 'Asimov'),
    array('title' => 'Treasure Island', 'author' => 'Stephenson')
  ));

  // return Response::json(array('flash' => 'Session expired'), 401);
}));

Route::get('/api/auth/csrf_token', function() {
  return Response::json(array('csrf_token' => csrf_token()));
});

Route::post('/api/auth/login', array('before' => 'csrf_json', 'uses' => 'AuthController@login'));
Route::get('/api/auth/logout', 'AuthController@logout');
Route::get('/api/auth/status', 'AuthController@status');
Route::get('/api/auth/secrets','AuthController@secrets');
