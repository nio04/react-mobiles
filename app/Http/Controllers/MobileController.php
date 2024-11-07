<?php

namespace App\Http\Controllers;

use App\Models\Mobile;
use Illuminate\Http\Request;

class MobileController extends Controller {

    /**
     * Display a listing of the resource.
     */
    public function index(Request $request) {
        $mobiles = Mobile::query();

        $query = $request->input("q") ?? "";
        $sortBy = $request->input("sortBy") ?? "default";
        $listings = $request->input("listings") ?? "20";
        $brandRequest = $request->input("brand") ?? "";
        $chipsetRequest = $request->input("chipset") ?? "";
        $networkRequest = $request->input("network") ?? "";

        if (!empty($query)) {
            $mobiles->where(
                "name",
                "like",
                "%" . $query ?? "" . "%"
            );
        }
        if (!empty($sortBy)) {
            $mobiles->orderBy(
                "price",
                ($sortBy === "default" ||
                    $sortBy === "low_to_high")
                    ? "asc" : "desc"
            );
        }
        if (!empty($listings)) {
            $mobiles->simplePaginate($listings);
        }

        // filterings
        if (!empty($brandRequest)) {
            $brandInput = explode(",", $request->input("brand"));
            $mobiles->whereIn("brand", $brandInput);
        }

        if (!empty($chipsetRequest)) {
            $chipsetInput = explode(",", $request->input("chipset"));
            $mobiles->whereIn("chipset", $chipsetInput);
        }

        if (!empty($networkRequest)) {
            $networkInput = explode(",", $request->input("network"));
            $mobiles->whereIn("network", $networkInput);
        }

        return response()->json($mobiles->simplePaginate($request->input("listings") ?? "20"));

        // filtering
        // if ($request->input("brand")) {
        //     logger("test", [$request->input("listings")]);
        //     $mobiles = Mobile::where("name", "like", "%" . $request->input("q") ?? "" . "%")->whereIn('brand', $brandRequest)->orderBy("price", ($request->input("sortBy") === "default" || $request->input("sortBy") === "low_to_high") ? "asc" : "desc")->simplePaginate($request->input("listings"));
        // }
        // return ['mobiles' => $mobiles];
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
}
