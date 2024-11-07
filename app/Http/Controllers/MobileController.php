<?php

namespace App\Http\Controllers;

use App\Models\Mobile;
use App\Services\MobileFilterService;
use Illuminate\Contracts\Pagination\Paginator;
use Illuminate\Http\Request;

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
            "battery_type"
        ];

        foreach ($filterableFields as $field) {
            $items = $request->input($field);

            if (!empty($items)) {
                $itemCollections = explode(",", $items);
                $query->whereIn($field, $itemCollections);
            }

            if ($searchQuery = $request->input('q')) {
                $query->where('name', 'like', '%' . $searchQuery . '%');
            }
            return $query;
        }
    }

    protected function applySorting($query, $sortBy) {
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
}
