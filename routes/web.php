<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\GameController;

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

Route::group(['middleware' => ['auth']], function() {
    Route::get("/",[GameController::class,"getGame"])->name("games.index");
    Route::get("/show/game/{game}",[GameController::class,"showGame"]);
    Route::get("/show/comment/{comment}",[GameController::class,"showComment"]);
    Route::post("/comments",[GameController::class,"storeComment"]);
    Route::get("/create/{game}",[GameController::class,"createComment"]);
    Route::get("/updateDate",[GameController::class,"updateData"]);
    // Route::get('/setting', function () {
    //     return Inertia::render('Welcome', [
    //         'canLogin' => Route::has('login'),
    //         'canRegister' => Route::has('register'),
    //         'laravelVersion' => Application::VERSION,
    //         'phpVersion' => PHP_VERSION,
    //     ]);
    // });
});


// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

require __DIR__.'/auth.php';
