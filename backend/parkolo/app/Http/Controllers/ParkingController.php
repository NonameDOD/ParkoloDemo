<?php

namespace App\Http\Controllers;

use App\Models\Parking;
use App\Http\Requests\StoreParkingRequest;
use App\Http\Requests\UpdateParkingRequest;

class ParkingController extends Controller
{
    // GET /api/parkings
    public function index()
    {
        return Parking::all();
    }

    // POST /api/parkings
    public function store(StoreParkingRequest $request)
    {
        $parking = Parking::create($request->validated());

        return response()->json($parking, 201);
    }

    // GET /api/parkings/{parking}
    public function show(Parking $parking)
    {
        return $parking->load('user');
    }

    // PUT/PATCH /api/parkings/{parking}
    public function update(UpdateParkingRequest $request, Parking $parking)
    {
        $parking->update($request->validated());

        return response()->json($parking);
    }

    // DELETE /api/parkings/{parking}
    public function destroy(Parking $parking)
    {
        $parking->delete();

        return response()->json([
            'message' => 'Parking deleted successfully'
        ]);
    }
}