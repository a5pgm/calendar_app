<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('match2022s', function (Blueprint $table) {
            $table->id();
            $table->string("status");
            $table->string("utc_date");
            $table->string("matchday");
            $table->foreignId("hometeam_id")->constrained('team2022s');
            $table->foreignId("awayteam_id")->constrained('team2022s');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('match2022s');
    }
};
