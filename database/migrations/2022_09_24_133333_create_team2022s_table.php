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
        Schema::create('team2022s', function (Blueprint $table) {
            $table->id();
            $table->foreignId('league_id')->constrained('leagues');
            $table->string('name');
            $table->string('short_name');
            $table->string('tla');
            $table->string('venue');
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
        Schema::dropIfExists('team2022s');
    }
};