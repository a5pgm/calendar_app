<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Game;
use App\Models\Team;


class GameController extends Controller
{
    //
    
    public function getGame(Game $game, Team $team) {
        
        return Inertia::render('Calendar',["games" => Game::with("home_team","away_team","season")->get(), "teams" => $team->get()]);
        
    }
}
