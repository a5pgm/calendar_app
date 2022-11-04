<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Services\GameUpdateService;

class GameDataUpdate extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'GameDataUpdate';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = '試合データのアップデート';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        logger('試合データのアップデートの開始');
        GameUpdateService::outputNewGameStatusDataToJson();
        GameUpdateService::updateGameStatusData();
        logger('試合データのアップデートの終了');
    }
}
