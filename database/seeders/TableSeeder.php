<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Team;
use App\Models\Game;

class TableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        \DB::table('leagues')->insert([
            [
                "id" => 2224,
                "name" => "Primera Division",
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
                'deleted_at' => null,
            ]]);
        \DB::table('seasons')->insert([
            [
                "id" => 1504,
                "year" => "22/23",
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],
            [
                "id" => 380,
                "year" => "21/22",
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),  
            ]
            ]);
        $this->command->info("チームの作成を開始");
        
        $json = file_get_contents(__DIR__ . '/../data/teams.json');
        $teams = json_decode($json,true);
        
        $count = 0;
        foreach($teams as $team) {
                Team::create($team);
                $count++;
        }
        
        $this->command->info("チームを{$count}件、作成しました。");
        
        // 試合の追加
        $this->command->info("試合の作成を開始");
        
        $json = file_get_contents(__DIR__ . '/../data/games.json');
        $matches = json_decode($json,true);
        
        $count = 0;
        foreach($matches as $match) {
            Game::create($match);
            
            $count++;
        }
        
        $this->command->info("試合を{$count}件、作成しました。");
        
    }
}
