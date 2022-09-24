<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Team2022;

class TeamsTable2022Seeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->command->info("チームの作成を開始");
        
        $json = file_get_contents(__DIR__ . '/../data/2022_teams.json');
        $teams = json_decode($json,true);
        
        $count = 0;
        foreach($teams as $team) {
            Team2022::create($team);
            
            $count++;
        }
        
        $this->command->info("チームを{$count}件、作成しました。");
    }
}
