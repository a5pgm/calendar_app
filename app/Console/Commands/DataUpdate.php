<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Services\ScoreUpdateService;
use App\Services\GameUpdateService;

class DataUpdate extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'DataUpdate';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'データのアップデート';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        logger('試合データのアップデートの開始');
        GameUpdateService::outputNewGameDateToJson();
        // ScoreUpdateService::test();
        logger('試合データのアップデートの終了');
    }
}
