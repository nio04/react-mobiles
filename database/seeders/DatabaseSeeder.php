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
                'battery_capacity' => fake()->numberBetween(4000, 7000),
                'battery_type' => fake()->randomElement(['Lithium Polymer (Li-Po)', 'Lithium-ion (Li-Ion)']),
                'camera' => fake()->randomElement(['12', '16', '48', '64', '200']),
                'chipset' => fake()->randomElement(
                    ['Bionic', 'Exynos', 'Kirin', 'MediaTek', 'Qualcomm', 'Unisoc']
                ),
                'refresh_rate' => fake()->randomElement(['120', '144', '165', '90', '60']),
                'os' => fake()->randomElement(['Android', 'iOS', 'Windows', 'Java']),
                'ram' => fake()->randomElement(['2', '4', '6', '8', '12']),
                'storage' => fake()->randomElement(['16', '32', '64', '128', '256']),
                'display_type' => fake()->randomElement([' AMOLED', 'IPS LCD', 'LCD', 'OLED']),
                'status' => fake()->randomElement(['official', 'unofficial', 'available', 'not available', 'upcoming']),
                // here network should be combo of following values, not only one!
                'network' => fake()->randomElement(['3', '4', '5', 'WIFI']),
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
