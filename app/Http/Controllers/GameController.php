<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Game;
use App\Models\Team;
use App\Models\Score;
use App\Models\Comment;
use App\Http\Requests\CommentRequest;


class GameController extends Controller
{
    //
    
    // public function __construct() {
    //     $this->middleware('auth',['only' => ['storeComment']]);
    // }
    
    public function getGame(Game $game, Team $team,Score $score) {
        
        $games = Game::with("home_team","away_team","season",'score')->get();

        $schedules_list = [];
        foreach($games as $game)
        {
           $data = [
                "color" => '#4ED9A6',
                "textColor" => '#4ED9A6',
                "backgroundColor" => '#262626',
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
        return Inertia::render('Calendar',["games" => $schedules_list, "matches" => $games,"scores" => $score->get()]);
        
    }
    
    public function showGame(Game $game, Score $score,Comment $comment) {
        $score = Score::find($game["id"]);
        $comment = $comment->where('game_id',$game->id)->get();
        return Inertia::render('showGame',["game" => $game->load('home_team','away_team','season'),"score"=> $score,"comments" => $comment->load('game','user')]);
        // return Inertia::render('showGame',["game" => $game->load('season') ]);
        // return Inertia::render('showGame');
        // return redirect('/');
    }
    
    public function storeComment(CommentRequest $request, Comment $comment){
        $input = $request->all();
        $comment -> fill($input)->save();
        return redirect("/show/" . $comment->game_id);
        // return redirect ("/");
        
    }
    
    public function showComment() {
        
    }
    
    
}
