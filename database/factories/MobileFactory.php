<?php

namespace Database\Factories;

use App\Models\Mobile;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Mobile>
 */
class MobileFactory extends Factory {
    protected $model = Mobile::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array {
        return [
            'name' => $this->generateUniqueMobileName(),
            'brand' => fake()->company(),
            'price' => fake()->numberBetween(10000, 100000), // Random price between 10,000 and 100,000
            'type' => fake()->randomElement(['official', 'unofficial']),
            'battery' => fake()->numberBetween(2000, 6000) . ' mAh',
            'camera' => fake()->randomElement(['12 MP', '16 MP', '48 MP', '64 MP']),
            'chipset' => fake()->word() . ' Chipset',
            'os' => fake()->randomElement(['Android', 'iOS']),
            'ram' => fake()->randomElement(['2 GB', '4 GB', '6 GB', '8 GB', '12 GB']),
            'storage' => fake()->randomElement(['32 GB', '64 GB', '128 GB', '256 GB']),
            'status' => fake()->randomElement(['available', 'unavailable']),
        ];
    }

    private function generateUniqueMobileName() {
        static $counter = 1;
        return 'Mobile Model ' . $counter++;
    }
}
