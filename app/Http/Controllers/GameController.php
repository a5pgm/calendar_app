<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Game;
use App\Models\Team;
use App\Models\Score;
use App\Models\Comment;
use App\Http\Requests\CommentRequest;
use Database\Seeders\UpdateTableSeeder;


class GameController extends Controller
{    
    public function getGame(Game $game, Team $team,Score $score, Comment $comment) {
        $isExistance = false;
        $numOfComment = 0;
        
        $games = Game::with("home_team","away_team","season",'score')->get();
        $comments = $comment -> get() ->load('game','user');
        $schedules_list = [];
        foreach($games as $game)
        {
                foreach($comments as $comment){
                    if($comment -> game_id == $game->id && $comment -> open == 0){
                        $isExistance = true;
                        $numOfComment ++;
                    }
                }
            if($isExistance){
                $data = [
                    "color" => '#4ED9A6',
                    "textColor" => '#4ED9A6',
                    "backgroundColor" => '#262626',
                    "id" => $game -> id,
                    "title" => ($game->home_team->tla. " vs ". $game->away_team->tla. " " . $numOfComment . "件"),
                    "start" =>  $game->utc_date,
                ];
            }
            else {
                $data = [
                    "color" => '#262626',
                    "textColor" => '#4ED9A6',
                    "backgroundColor" => '#262626',
                    "id" => $game -> id,
                    "title" => ($game->home_team->tla. " vs ". $game->away_team->tla),
                    "start" =>  $game->utc_date,
                ];
            }

            array_push($schedules_list,$data);
            $isExistance = false;
        }
        return Inertia::render('Calendar',["events" => $schedules_list, "games" => $games,"scores" => $score->get() ] );
        
    }
    
    public function showGame(Game $game, Score $score,Comment $comment) {
        $score = Score::find($game["id"]);
        $comment = $comment->where('game_id',$game->id)->get();
        return Inertia::render('showGame',["game" => $game->load('home_team','away_team','season'),"score"=> $score,"comments" => $comment->load('game','user')]);
    }
    
    public function storeComment(CommentRequest $request, Comment $comment){
        $input = $request->all();
        $now = date('Y-m-d H:i:s');
        $comment -> fill($input);
        $comment -> created_at = $now;
        $comment -> save();
        return redirect("/show/game/" . $comment->game_id);
        
    }
    
    public function showComment(Comment $comment) {
        return Inertia::render('showComment', ['comment' => $comment -> load('game','user')]);
    }
    
    public function updateData() {
        $seeder = new UpdateTableSeeder;
        $seeder -> run();
        return redirect("/");
    }
    
    public function editComment(Comment $comment){
        return Inertia::render('editComment',["comment" => $comment]);
    }
    
    public function updateComment(CommentRequest $request, Comment $comment){
        $input = $request->all();
        $comment->fill($input)->save();
        return redirect("/show/comment/" . $comment->id);
    }
    
    public function deleteComment(Comment $comment){
        $game_id = $comment->game_id;
        $comment->delete();
        return redirect("/show/game/" . $game_id);
    }
    
    
}
