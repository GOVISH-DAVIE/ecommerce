<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;

class ApiTokenController extends Controller
{
    //
    public function update(Request $request)
    {
        $token = Str::random(60);
        $login = $request->validate([
            'email' => 'required',
            'password' => 'required',
        ]);
        if (!Auth::attempt($login)) {
            $arrayName = array('state' => 'failed', 'data' => 'Wrong Credentials');
            return response()->json($arrayName);
        } else {
            # code...
            $request->user()->forceFill([
                'api_token' => hash('sha256', $token),
            ])->save();

            return ['token' => $token];
        }
    }
}
