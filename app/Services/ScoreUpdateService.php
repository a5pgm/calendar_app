<?php

namespace App\Services;

use DateTimeImmutable;
use DateTimeZone;
use App\Models\Score;

class ScoreUpdateService {

    public static function updateScoreStatusData(){
        $objDateTime = new DateTimeImmutable('now',new DateTimeZone('Asia/Tokyo'));
        $filename = $objDateTime -> format('Y_m_d_H_i') . "_scores" . ".json";
        $response = file_get_contents($filename);
        $gameData = json_decode($response,true);

        foreach($gameData as $key => $value){
            $now_score_data = Score::find($value["id"]);
            if($now_score_data->winner != $value["winner"] || $now_score_data->full_home != $value["full_home"] 
                || $now_score_data->full_away != $value["full_away"] || $now_score_data->half_home != $value["half_home"] 
                || $now_score_data->half_away != $value["half_away"]  ){
                $now_score_data->winner = $value["winner"];
                $now_score_data->full_home = $value["full_home"];
                $now_score_data->full_away = $value["full_away"];
                $now_score_data->half_home = $value["half_home"];
                $now_score_data->half_away = $value["half_away"];
                $now_score_data -> save();
            }
        }
        logger("スコアデータの保存をしました。");

    }

    public static function outputNewScoreStatusDataToJson(){
        // API通信開始
        $data_set = [];

/* 初期データ
        // $uri = 'http://api.football-data.org/v4/competitions/PD/matches?season=2021';
        // $reqPrefs['http']['method'] = 'GET';
        // $reqPrefs['http']['header'] = 'X-Auth-Token: 57726296ccf440b899ef218bea2b5a9a';
        // $stream_context = stream_context_create($reqPrefs);
        // $response = file_get_contents($uri, false, $stream_context);
        // $gameData = json_decode($response,true);

        // foreach($gameData["matches"] as $game){
        //     $id = $game["id"];
        //     $game_id = $game["id"];
        //     $winner = $game["score"]["winner"];
        //     $full_home = $game["score"]["fullTime"]["home"];
        //     $full_away = $game["score"]["fullTime"]["away"];
        //     $half_home = $game["score"]["halfTime"]["home"];
        //     $half_away = $game["score"]["halfTime"]["away"];
        //     array_push($data_set,["id" => $id, "game_id" => $game_id, "winner" => $winner,
        //                         "full_home" => $full_home, "full_away" => $full_away, 
        //                         "half_home" => $half_home, "half_away" => $half_away]);
        // }
*/
        $uri = 'http://api.football-data.org/v4/competitions/PD/matches';
        $reqPrefs['http']['method'] = 'GET';
        $reqPrefs['http']['header'] = 'X-Auth-Token: 57726296ccf440b899ef218bea2b5a9a';
        $stream_context = stream_context_create($reqPrefs);
        $response = file_get_contents($uri, false, $stream_context);
        $gameData = json_decode($response,true);

        foreach($gameData["matches"] as $game){
            $id = $game["id"];
            $game_id = $game["id"];
            $winner = $game["score"]["winner"];
            $full_home = $game["score"]["fullTime"]["home"];
            $full_away = $game["score"]["fullTime"]["away"];
            $half_home = $game["score"]["halfTime"]["home"];
            $half_away = $game["score"]["halfTime"]["away"];
            array_push($data_set,["id" => $id, "game_id" => $game_id, "winner" => $winner,
                                "full_home" => $full_home, "full_away" => $full_away, 
                                "half_home" => $half_home, "half_away" => $half_away]);
        }

        $data = json_encode($data_set, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);

        //前回のファイルがあれば削除
        $pattern = '[0-9][0-9][0-9][0-9]_[0-9][0-9]_[0-9][0-9]_[0-9][0-9]_[0-9][0-9]_scores.json';
        foreach(glob($pattern) as $file){
            unlink($file);

            logger($file . "を削除しました。");
        }
        //ファイル書き出し
        $objDateTime = new DateTimeImmutable('now',new DateTimeZone('Asia/Tokyo'));
        $outputFilename = $objDateTime -> format('Y_m_d_H_i') . "_scores" . ".json";
        file_put_contents( $outputFilename ,$data);
        logger($outputFilename . "を作成しました。");

/* 初期データの書き出し
        $outputFilename = "../../database/data/scores.json";
        file_put_contents( $outputFilename ,$data);

*/
    }
}
