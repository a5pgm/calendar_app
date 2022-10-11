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
        
        $games = Game::with("home_team","away_team","season")->get();

        $schedules_list = [];
        foreach($games as $game)
        {
           $data = [
                "color" => 'red',
                "textColor" => 'green',
                "backgroundColor" => 'yellow',
                // "display" => "background",
                "id" => $game -> id,
                "title" => ($game->home_team->tla. " vs ". $game->away_team->tla),
                "start" =>  $game->utc_date,
            ];
            array_push($schedules_list,$data);
        }
        // $settings = [
        //         "color" => 'yellow',
        //         "backgroundColor" => 'red',
        // ];
        // array_push($schedules_list,$settings);
        // dd($schedules_list);
        return Inertia::render('Calendar',["games" => $schedules_list, "matches" => $games]);
        
    }
    
    public function showGame(Game $game) {
        return Inertia::render('showGame',["game" => $game->load('home_team','away_team','season') ]);
        // return Inertia::render('showGame',["game" => $game->load('season') ]);
        // return Inertia::render('showGame');
        // return redirect('/');
    }
    
    
}
