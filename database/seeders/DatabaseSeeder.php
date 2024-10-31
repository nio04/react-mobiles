<?php

namespace Database\Seeders;

use App\Models\Mobile;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder {
    /**
     * Seed the application's database.
     */
    public function run(): void {
        $mobiles = [];

        for ($i = 1; $i <= 100000; $i++) {
            $currentTimestamp = now();

            $mobiles[] = [
                'name' => "Mobile " . $i,
                'brand' => fake()->randomElement(
                    ['Samsung', 'Google', 'OnePlus', 'Xiaomi', 'Oppo', 'Vivo', 'Sony', 'Realme', 'Asus', 'Motorola',]
                ),
                'price' => fake()->numberBetween(10000, 100000),
                'battery_capacity' => fake()->numberBetween(4000, 7000) . ' mAh',
                'battery_type' => fake()->randomElement(['Lithium Polymer (Li-Po)', 'Lithium-ion (Li-Ion)']),
                'camera' => fake()->randomElement(['12 MP', '16 MP', '48 MP', '64 MP', '200 MP']),
                'chipset' => fake()->randomElement(
                    ['Bionic', 'Exynos', 'Kirin', 'MediaTek', 'Qualcomm', 'Unisoc']
                ),
                'refresh_rate' => fake()->randomElement(['120Hz', '144Hz', '165Hz', '90Hz', '60Hz']),
                'os' => fake()->randomElement(['Android', 'iOS', 'Windows', 'Java']),
                'ram' => fake()->randomElement(['2 GB', '4 GB', '6 GB', '8 GB', '12 GB']),
                'storage' => fake()->randomElement(['32 GB', '64 GB', '128 GB', '256 GB']),
                'display_type' => fake()->randomElement([' AMOLED', 'IPS LCD', 'LCD', 'OLED']),
                'status' => fake()->randomElement(['official', 'unofficial', 'available', 'not available', 'upcoming']),
                'network' => fake()->randomElement(['3G', '4G', '5G', 'WIFI', 'upcoming']),
                'cover' => 'https://picsum.photos/seed/' . fake()->numberBetween(1, 1000) . '/400/300',
                'created_at' => $currentTimestamp,
            ];
        }

        // Insert records in batches
        foreach (array_chunk($mobiles, 1000) as $chunk) {
            DB::table('mobiles')->insert($chunk);
        }
    }
}
