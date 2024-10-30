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
            $table->string('type'); // official or unofficial
            $table->string('battery');
            $table->string('camera');
            $table->string('chipset');
            $table->string('os');
            $table->string('ram');
            $table->string('storage');
            $table->string('status'); // available or unavailable            
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
