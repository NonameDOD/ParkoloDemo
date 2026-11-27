<?php

namespace Database\Factories;

use App\Models\Parking;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Parking>
 */
class ParkingFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    //'parking_space', 'status', 'date'
    public function definition(): array
    {
        return [
            'user_id' => User::factory(),
            'parking_space' => fake()->word(),
            'status' => fake()->randomElement(['occupied', 'available', 'inactive']),
            'date' => fake()->dateTime('now')
        ];
    }
}
