<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void {
        Schema::create('mobiles', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('brand');
            $table->string('price');
            $table->string('battery_capacity'); //capacity
            $table->string('battery_type');
            $table->string('camera');
            $table->string('chipset');
            $table->string('refresh_rate');
            $table->string('os');
            $table->string('ram');
            $table->string('storage');
            $table->string('display_type');
            $table->string('status'); // available or unavailable
            $table->string('network');
            $table->string("cover")->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void {
        Schema::dropIfExists('mobiles');
    }
};
