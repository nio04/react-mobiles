<?php

namespace App\Http\Controllers;

use App\Models\Mobile;
use Illuminate\Http\Request;

class MobileController extends Controller {
    protected $perPage = 20;
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request) {
        $query = $request->input("query");
        $showItems = $request->input("showItems");
        $sortBy = $request->input("sortBy");

        if ($query) {
            return Mobile::where("name", "like", "%" . $query . "%")->simplePaginate($this->perPage);
        }

        if ($showItems) {
            return Mobile::latest()->simplePaginate($showItems);
        }

        if ($sortBy === "default") {
            return Mobile::latest()->simplePaginate($this->perPage);
        }
        if ($sortBy === "low_to_high") {
            return Mobile::orderBy("price", "asc")->simplePaginate($this->perPage);
        }
        if ($sortBy === "high_to_low") {
            return Mobile::orderBy("price", "desc")->simplePaginate($this->perPage);
        }

        return Mobile::latest()->simplePaginate($this->perPage);
    }
}
