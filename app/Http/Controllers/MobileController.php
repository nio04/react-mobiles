<?php

namespace App\Http\Controllers;

use App\Models\Mobile;
use Illuminate\Http\Request;

class MobileController extends Controller {
    protected $perPage = 20;

    public function __construct() {
    }
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request) {
        $mobiles = Mobile::latest()->simplePaginate($request->input("listings"));

        $query = $request->input("query");

        if ($query) {
            return Mobile::where("name", "like", "%" . $query . "%")->simplePaginate($request->input("listings"));
        }

        // filtering
        if ($request->input("brand")) {
            $brandRequest = explode(",", $request->input("brand"));
            logger("test", [$request->input("listings")]);
            $mobiles = Mobile::where("name", "like", "%" . $request->input("q") ?? "" . "%")->whereIn('brand', $brandRequest)->orderBy("price", ($request->input("sortBy") === "default" || $request->input("sortBy") === "low_to_high") ? "asc" : "desc")->simplePaginate($request->input("listings"));
        }
        return ['mobiles' => $mobiles];
    }

    function loadAdditionalData() {
        $brands = Mobile::select("brand")->distinct()->get();
        $chipsets = Mobile::select("chipset")->distinct()->get();
        $displayTypes = Mobile::select("display_type")->distinct()->get();
        $status = Mobile::select("status")->distinct()->get();
        $networkTypes = Mobile::select("network")->distinct()->get();
        $os = Mobile::select("os")->distinct()->get();
        $ram = Mobile::select("ram")->distinct()->get();
        $storage = Mobile::select("storage")->distinct()->get();

        return [
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

    function queryStringProcessor($key) {
        $queryString = explode("=", request()->query($key, ""));
        array_shift($queryString);
        return  $queryString;
    }
}
