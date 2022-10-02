<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Match;
use App\Models\Team;


class GameController extends Controller
{
    //
    
    public function getGame(Game $game) {
        
        return Inertia::render('Calendar',["games" => Game::with("team")->get()]);
        
    }
}
