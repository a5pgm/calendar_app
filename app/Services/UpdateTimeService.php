<?php

namespace App\Services;
use App\Models\Game;
use DateTimeZone;
use DateTime;

class UpdateTimeService {

    public static function UpdateTime(){
        $flg = false;
        date_default_timezone_set('Asia/Tokyo');
        $now = new DateTime();
        $now = $now ->setTimeZone(new DateTimeZone('Asia/Tokyo'));
/*
        $match_dates = new DateTime("2022-11-07 10:16:00");
        echo $now->format('Y-m-d H:i:s') . "\n" .$match_dates->format('Y-m-d H:i:s') . "\n";
        $datediff = $now -> diff($match_dates);
        // echo $datediff->y . " " . $datediff->m . " " . $datediff->d . " " . $datediff->h . " " . $datediff->i . " " . $datediff->s . " invert " . $datediff->invert . "\n";
        if($datediff->invert == 1 && $datediff->m == 0 && $datediff->y == 0 && $datediff->d == 0 && 
            ( ($datediff->h * 3600 + $datediff->i * 60 + $datediff->s )) <= 7200 ){ //現在時刻のほうが大きいかつ、同じ日付であり、時間差が2時間以内なら
            $flg = true;
            echo "true";
        }
*/
        
        $match_dates = Game::select('utc_date') -> get();
        foreach($match_dates as $key => $value){
            $matchdate = new DateTime($value["utc_date"]);
            $datediff = $now -> diff($matchdate);
            if($datediff->invert == 1 && $datediff->y == 0 && $datediff->d == 0 && 
                ( ($datediff->h * 3600 + $datediff->i * 60 + $datediff->s )) <= 7200 ){ //現在時刻のほうが大きいかつ、年と
                $flg = true;
                logger( $matchdate->format('Y-m-d H:i:s') );
            }
        }
        
        return $flg;
    }
}

$obj = new UpdateTimeService();

$obj -> UpdateTime();
