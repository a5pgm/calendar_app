<?php

namespace App\Services;
use App\Models\Game;
use Illuminate\Http\Response;
use DateTimeImmutable;
use DateTimeZone;
use DateTime;

class GameUpdateService {

    public static function updateGameStatusData(){
        $objDateTime = new DateTimeImmutable('now',new DateTimeZone('Asia/Tokyo'));
        $filename = $objDateTime -> format('Y_m_d_H_i') . "_games" . ".json";
        $response = file_get_contents($filename);
        $gameData = json_decode($response,true);

        foreach($gameData as $key => $value){
            $now_game_data = Game::find($value["id"]);
            if($now_game_data -> status != $value["status"] || $now_game_data ->utc_date != $value["utc_date"]){
                $now_game_data -> status = $value["status"];
                $now_game_data -> utc_date = $value["utc_date"];
                $now_game_data -> save(); 
            }
        }
        logger("試合データの保存をしました。");
        
    }

    public static function outputNewGameStatusDataToJson(){
        // API通信開始
        $data_set = [];

/* 初期データ用
        $uri = 'http://api.football-data.org/v4/competitions/PD/matches?season=2021';
        $reqPrefs['http']['method'] = 'GET';
        $reqPrefs['http']['header'] = 'X-Auth-Token: 57726296ccf440b899ef218bea2b5a9a';
        $stream_context = stream_context_create($reqPrefs);
        $response = file_get_contents($uri, false, $stream_context);
        $gameData = json_decode($response,true);

        foreach($gameData["matches"] as $game){
            $id = $game["id"];
            $status = $game["status"];
            $utcdate = $game["utcDate"];
            $utcdate = new DateTimeImmutable($utcdate);
            $utcdate -> setTimeZone(new DateTimeZone('Asia/Tokyo'));
            $utc_date = $utcdate -> format('Y-m-d H:i:s');
            $match_day = $game["matchday"];
            $hometeam_id = $game["homeTeam"]["id"];
            $awayteam_id = $game["awayTeam"]["id"];
            $season_id   = $game["season"]["id"];
            array_push($data_set,["id" => $id, "status" => $status, "utc_date" => $utc_date,
                                "match_day" => $match_day, "home_team_id" => $hometeam_id, 
                                "away_team_id" => $awayteam_id, "season_id" => $season_id]);
        }

*/
        $uri = 'http://api.football-data.org/v4/competitions/PD/matches';
        $reqPrefs['http']['method'] = 'GET';
        $reqPrefs['http']['header'] = 'X-Auth-Token: 57726296ccf440b899ef218bea2b5a9a';
        $stream_context = stream_context_create($reqPrefs);
        $response = file_get_contents($uri, false, $stream_context);
        $gameData = json_decode($response,true);

        foreach($gameData["matches"] as $game){
            $id = $game["id"];
            $status = $game["status"];
            $utcdate = $game["utcDate"];
            $utcdate = new DateTime($utcdate);   // utcdateを日本時間に変換する処理3行
            $utcdate -> setTimeZone(new DateTimeZone('Asia/Tokyo'));
            $utc_date = $utcdate -> format('Y-m-d H:i:s');
            $match_day = $game["matchday"];
            $hometeam_id = $game["homeTeam"]["id"];
            $awayteam_id = $game["awayTeam"]["id"];
            $season_id   = $game["season"]["id"];
            array_push($data_set,["id" => $id, "status" => $status, "utc_date" => $utc_date,
                                "match_day" => $match_day, "home_team_id" => $hometeam_id, 
                                "away_team_id" => $awayteam_id, "season_id" => $season_id]);
        }

        $data = json_encode($data_set, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);

        //前回のファイルがあれば削除
        $pattern = '[0-9][0-9][0-9][0-9]_[0-9][0-9]_[0-9][0-9]_[0-9][0-9]_[0-9][0-9]_games.json';
        foreach(glob($pattern) as $file){
            unlink($file);

            logger( $file . "を削除しました。" );
        }
        //ファイル書き出し
        $objDateTime = new DateTimeImmutable('now',new DateTimeZone('Asia/Tokyo'));
        $outputFilename = $objDateTime -> format('Y_m_d_H_i') . "_games" . ".json";
        file_put_contents( $outputFilename ,$data);
        logger( $outputFilename . "を作成しました。" );
/* 初期データの書き出し
        $outputFilename = "../../database/data/games.json";
        file_put_contents( $outputFilename ,$data);
*/
    }
}