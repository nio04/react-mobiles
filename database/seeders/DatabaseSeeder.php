<?php

namespace Database\Seeders;

use App\Models\Mobile;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder {
    /**
     * Seed the application's database.
     */
    public function run(): void {
        $mobiles = [];

        for ($i = 1; $i <= 100000; $i++) {
            $mobiles[] = [
                'name' => "Mobile " . $i,
                'brand' => fake()->randomElement(
                    ['Samsung', 'Google', 'OnePlus', 'Xiaomi', 'Oppo', 'Vivo', 'Sony', 'Realme', 'Asus', 'Motorola',]
                ),
                'price' => fake()->numberBetween(10000, 100000),
                'type' => fake()->randomElement(['official', 'unofficial']),
                'battery' => fake()->numberBetween(2000, 6000) . ' mAh',
                'camera' => fake()->randomElement(['12 MP', '16 MP', '48 MP', '64 MP']),
                'chipset' => fake()->randomElement(
                    ['Bionic', 'Exynos', 'Kirin', 'MediaTek', 'Qualcomm', 'Unisoc']
                ),
                'os' => fake()->randomElement(['Android', 'iOS', 'Windows', 'Java']),
                'ram' => fake()->randomElement(['2 GB', '4 GB', '6 GB', '8 GB', '12 GB']),
                'storage' => fake()->randomElement(['32 GB', '64 GB', '128 GB', '256 GB']),
                'status' => fake()->randomElement(['available', 'unavailable']),
                'cover' => 'https://picsum.photos/seed/' . fake()->numberBetween(1, 1000) . '/400/300',

            ];
        }

        // Insert records in batches
        foreach (array_chunk($mobiles, 5000) as $chunk) {
            Mobile::insert($chunk);
        }
    }
}
