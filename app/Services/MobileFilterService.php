<?php

namespace App\Services;

use App\Models\Mobile;

class MobileFilterService {
  /**
   * Retrieve distinct values for filterable fields.
   */
  public static function getStaticFilterData() {
    return [
      'brands' => Mobile::select('brand')
        ->distinct()
        ->pluck('brand'),
      'chipsets' => Mobile::select('chipset')
        ->distinct()
        ->pluck('chipset'),
      'display_type' => Mobile::select('display_type')
        ->distinct()
        ->pluck('display_type'),
      'status' => Mobile::select('status')
        ->distinct()
        ->pluck('status'),
      'network' => ['3', '4', '5', 'WIFI'],
      'os' => Mobile::select('os')
        ->distinct()
        ->pluck('os'),
      'ram' => Mobile::select('ram')
        ->distinct()->pluck('ram'),
      'storage' => Mobile::select('storage')
        ->distinct()
        ->pluck('storage'),
      'refresh_rate' => Mobile::select('refresh_rate')
        ->distinct()
        ->pluck('refresh_rate'),
      'camera' => Mobile::select('camera')
        ->distinct()
        ->pluck('camera'),
      'battery_type' => Mobile::select('battery_type')
        ->distinct()
        ->pluck('battery_type')
    ];
  }
}
