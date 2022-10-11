<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Game;

class TableUpdateSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->command->info("試合の更新を開始");
        
        $pythonPath = "app/Python/";
        $command = "/usr/bin/python3 " . $pythonPath . "getGame.py";
        // $command = "pwd";
        exec($command , $outputs);

        
        
        $json = file_get_contents(__DIR__ . '/../data/games.json');
        $matches = json_decode($json,true);
        
        $count = 0;
        foreach($matches as $match) {
            $m = Game::find($match["id"]);
            
            $m->status = $match["status"];
            $m->utc_date = $match["utc_date"];
            $m->match_day = $match["match_day"];
            $m->home_team_id = $match["home_team_id"];
            $m->away_team_id = $match["away_team_id"];
            $m->season_id = $match["season_id"];
            // $m->created_at = $match["created_at"];
            $m->updated_at = date('Y-m-d H:i:s');
            
            $m -> save();
            $count++;
        }
        
        $this->command->info("試合を{$count}件、更新しました。");
    }
}
