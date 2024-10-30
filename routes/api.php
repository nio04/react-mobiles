<?php

use App\Http\Controllers\MobileController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get("/mobiles", [MobileController::class, "index"])->name("mobiles.index");
