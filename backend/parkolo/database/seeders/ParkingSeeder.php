<?php

namespace Database\Seeders;

use App\Models\Parking;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ParkingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Parking::factory()->create([
            'user_id' => User::factory()->create()->id,
            'license_plate' => fake()->bothify('???-###'),
            'status' => fake()->randomElement(['occupied', 'available', 'inactive']),
        ]);
    }
}
