<?php

namespace App\Console;

use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;
use App\Console\Commands\GameDateUpdate;
use App\Console\Commands\ScoreDataUpdate;



class Kernel extends ConsoleKernel
{
    protected $commands = [
        Commands\GameDataUpdate::Class,
        Commands\ScoreDataUpdate::class,
    ];

    /**
     * Define the application's command schedule.
     *
     * @param  \Illuminate\Console\Scheduling\Schedule  $schedule
     * @return void
     */
    protected function schedule(Schedule $schedule)
    {
        $schedule -> command('GameDataUpdate') -> everyMinute();
        $schedule -> command('ScoreDataUpdate') -> everyMinute();
    }

    /**
     * Register the commands for the application.
     *
     * @return void
     */
    protected function commands()
    {
        $this->load(__DIR__.'/Commands');

        require base_path('routes/console.php');
    }
}
