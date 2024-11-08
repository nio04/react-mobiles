<?php

namespace App\Http\Controllers;

use App\Models\Mobile;
use App\Services\MobileFilterService;
use finfo;
use Illuminate\Http\Request;
use Illuminate\Routing\Contracts\ControllerDispatcher;
use Illuminate\Support\Facades\DB;

class MobileController extends Controller {

    /**
     * Display a listing of the resource.
     */
    public function index(Request $request) {
        $mobiles = Mobile::query();

        $mobiles = $this->applyFilters($mobiles, $request);
        $mobiles = $this->applySorting($mobiles, $request);
        $paginate = $this->applyPagination($mobiles, $request->input("listings", 20));

        return $paginate;
    }

    protected function applyFilters($query, Request $request) {
        $filterableFields = [
            "brand",
            "chipset",
            "network",
            "os",
            "ram",
            "storage",
            "status",
            "display_type",
            "refresh_rate",
            "camera",
            "battery_type",
            "min_price",
            "max_price"
        ];

        foreach ($filterableFields as $field) {
            $values = $request->input($field);

            if ($field === "min_price") continue;

            if ($field === "max_price") {
                if (empty($values)) return $query;

                $query->whereBetween("price", [
                    str_replace(
                        ",",
                        "",
                        $request->input("min_price")
                    ),
                    str_replace(
                        ",",
                        "",
                        $request->input("max_price")
                    )
                ]);

                return $this->searchQuery($query, $request);
            }

            if (!empty($values)) {
                $valuesArray = explode(",", $values);
                $query->whereIn($field, $valuesArray);
            }
        }

        return $this->searchQuery($query, $request);
        return $query;
    }


    protected function applySorting($query, $request) {
        $sortBy = $request->input("sortBy");

        if (!$sortBy || $sortBy === "default" || $sortBy === "low_to_high") {
            return $query->orderBy('price', 'asc');
        } elseif ($sortBy === 'high_to_low') {
            return $query->orderBy('price', 'desc');
        }

        return $query;
    }

    protected function applyPagination($query, $listings) {
        return $query->paginate($listings);
    }

    public function loadAdditionalData() {
        return response()->json(MobileFilterService::getStaticFilterData());
    }

    protected function searchQuery($query, Request $request) {
        if ($q = $request->input('q')) {
            return  $query->where('name', 'like', '%' . $q . '%');
        }
        return $query;
    }
}
