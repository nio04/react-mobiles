<?php

namespace App\Http\Controllers;

use App\Models\Mobile;
use App\Services\MobileFilterService;
use Illuminate\Http\Request;

class MobileController extends Controller {

    /**
     * Display a listing of the resource.
     */
    public function index(Request $request) {
        $mobiles = Mobile::query();

        $mobiles = $this->searchQuery($mobiles, $request);
        $mobiles = $this->applyFilters($mobiles, $request);
        $mobiles = $this->applySorting($mobiles, $request);
        $paginate = $this->applyPagination($mobiles, $request->input("listings", 20));

        return $paginate;
    }

    protected function applyFilters($query, Request $request) {
        // List of filterable fields
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

        // Loop through each filterable field
        foreach ($filterableFields as $field) {
            $values = $request->input($field);

            // Handle the 'network' filter
            if ($field === "network" && !empty($values)) {
                $values = explode(',', $values); // Split into array if multiple values provided

                foreach ($values as $value) {
                    $value = trim($value); // Trim any surrounding spaces

                    // Check for 'wifi' specifically and apply LIKE query
                    if (strtolower($value) == 'wifi') {
                        $query->whereRaw("network LIKE '%WIFI%'");
                    } else {
                        $query->orWhere(function ($query) use ($value) {
                            $query->where('network', 'like', "%$value%");
                        });
                    }
                }
            }

            $minPrice = str_replace(",", "", $request->input("min_price"));
            $maxPrice = str_replace(",", "", $request->input("max_price"));

            // Case 1: Min price only (user provided min price, no max price)
            if (!empty($minPrice) && empty($maxPrice)) {
                $query->where("price", ">=", $minPrice);
            }

            // Case 2: Max price only (user provided max price, no min price)
            if (empty($minPrice) && !empty($maxPrice)) {
                $query->where("price", "<=", $maxPrice);
            }

            // Case 3: Both min_price and max_price provided (price range)
            if (!empty($minPrice) && !empty($maxPrice)) {
                $query->whereBetween("price", [$minPrice, $maxPrice]);
            }

            // Apply 'in' filter for other fields
            if (!empty($values) && $field !== "min_price" && $field !== "max_price") {
                $valuesArray = explode(",", $values);
                $query->whereIn($field, $valuesArray);
            }
        }

        // Final search query processing
        return $this->searchQuery($query, $request);
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
