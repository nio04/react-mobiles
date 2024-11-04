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
        $mobiles = Mobile::latest()->simplePaginate($this->perPage);
        $brands = Mobile::select("brand")->distinct()->get();
        $chipsets = Mobile::select("chipset")->distinct()->get();
        $displayTypes = Mobile::select("display_type")->distinct()->get();
        $status = Mobile::select("status")->distinct()->get();
        $networkTypes = Mobile::select("network")->distinct()->get();
        $os = Mobile::select("os")->distinct()->get();
        $ram = Mobile::select("ram")->distinct()->get();
        $storage = Mobile::select("storage")->distinct()->get();
        // filtering
        $brandsFilter = [];

        $query = $request->input("query");
        $showItems = $request->input("showItems");
        $sortBy = $request->input("sortBy");
        // filterings
        $brandsInput = $request->input("brandFilterings");

        if ($query) {
            return Mobile::where("name", "like", "%" . $query . "%")->simplePaginate($this->perPage);
        }

        if ($showItems) {
            $this->perPage = $showItems;
            return Mobile::latest()->simplePaginate($this->perPage);
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

        // filtering
        if ($request->input("brandFilterings")) {
            $requestedBrandFilterings = [];

            foreach ($brandsInput as $brand) {
                if ($brand['checked'] === "true") {
                    $requestedBrandFilterings[] = $brand['name'];
                }
            }

            if (count($requestedBrandFilterings) > 0) {
                $mobiles = Mobile::whereIn(
                    'brand',
                    $requestedBrandFilterings
                )->paginate($this->perPage);
            };
        }
        // dump($mobiles);
        return [
            'mobiles' => $mobiles,
            'brands' => $brands,
            "chipsets" => $chipsets,
            "display" => $displayTypes,
            "status" => $status,
            "network" => $networkTypes,
            "os" => $os,
            "ram" => $ram,
            "storage" => $storage,
        ];
    }
}
