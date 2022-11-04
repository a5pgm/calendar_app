<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Services\ScoreUpdateService;

class ScoreDataUpdate extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'ScoreDataUpdate';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'スコアデータのアップデート';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        logger('スコアデータのアップデートの開始');
        ScoreUpdateService::outputNewScoreStatusDataToJson();
        ScoreUpdateService::updateScoreStatusData();
        logger('スコアデータのアップデートの終了');
    }
}
