<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Game;

class GamesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
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
