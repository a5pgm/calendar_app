<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'title',
        'body',
        'user_id',
        'game_id',
        'open',
        'evaluation'  
    ];
    
    public function game(){
        return $this->belongsTo(Game::class);
    }
    
    public function user() {
        return $this->belongsTo(User::class);
    }
    
    
}
