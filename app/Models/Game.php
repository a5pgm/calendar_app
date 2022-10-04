<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Game extends Model
{
    use HasFactory;
    
    public function home_team() {
        return $this -> belongsTo(Team::class);
    }
    
    public function away_team() {
        return $this -> belongsTo(Team::class);
    }
    
    public function team() {
        return $this -> belongsTo(Team::class);
    }
    
    public function season() {
        return $this ->belongsTo(Season::class);
    }
    
}
