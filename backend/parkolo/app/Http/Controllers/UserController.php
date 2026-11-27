<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Http\Requests\StoreUserRequest;
use App\Http\Requests\UpdateUserRequest;

class UserController extends Controller
{
    // GET /api/users
    public function index()
    {
        return User::all();
    }

    // POST /api/users
    public function store(StoreUserRequest $request)
    {
        $user = User::create([
        ...$request->validated(),
        'password' => bcrypt($request->password),
    ]);

    return response()->json($user, 201);
    }

    // GET /api/users/{user}
    public function show(User $user)
    {
        return $user;
    }

    // PUT/PATCH /api/users/{user}
    public function update(UpdateUserRequest $request, User $user)
    {
        $user->update($request->validated());

        return response()->json($user);
    }

    // DELETE /api/users/{user}
    public function destroy(User $user)
    {
        $user->delete();

        return response()->json([
            'message' => 'User deleted successfully'
        ]);
    }
}