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

        if ($query) {
            return Mobile::where("name", "like", "%" . $query . "%")->simplePaginate($this->perPage);
        }

        if ($showItems) {
            return Mobile::latest()->simplePaginate($showItems);
        }

        return Mobile::latest()->simplePaginate($this->perPage);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create() {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request) {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id) {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id) {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id) {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id) {
        //
    }
}
