<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

#[Fillable(['parking_space', 'status', 'date'])]
class Parking extends Model
{
    /** @use HasFactory<\Database\Factories\ParkingFactory> */
    use HasFactory;
}
